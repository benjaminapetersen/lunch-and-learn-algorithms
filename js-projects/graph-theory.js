'use strict';

// based on this article:
// https://medium.com/@keithwhor/using-graph-theory-to-build-a-simple-recommendation-engine-in-javascript-ec43394b35a3

// using OOP to build up graphs with Nodes & Edges
// Unit will be the base structure for sharing
// behavior between Notes & Edges

class Unit {
  constructor(entity, properties) {
    this.entity = entity + ''; // force string conversion
    this.load(properties || {});
  }
  // load copies over the properties to its own props,
  // this ensures objects won't accidentally share props
  load(properties) {
    let props = Object.create(null);
    Object.keys(properties).forEach((key) => {
      props[key] = key; // kinda weird.
    });
    return this;
  }
  set(prop, value) {
    return this.properties[prop] = value;
  }
  unset(prop) {
    return delete this.properties[prop];
  }
  has(prop) {
    return Object.prototype.hasOwnProperty.call(this.properties, prop);
  }
  toString() {
    return [
      this.constructor.name,
      ' (', this.entity, ' ', JSON.stringify(this.properties) ,')'
    ].join();
  }
}


class Node extends Unit {
  constructor(entity, properties) {
    super(entity, properties);
    this.edges = [];
    this.inputEdges = [];
    this.outputEdges = [];
  }
  unlink() {
    let edges = this.edges;
    for(let i = 0; i < edges.length; i++) {
      edges[i].unlink();
    }
    return true;
  }
}

class Edge extends Unit {
  constructor(entity, properties) {
    super(entity, properties);
    this.inputNode = null;
    this.outputNode = null;
    this.duplex = false;
    this.distance = 1;
  }
  _linkTo(node, direction) {
    if(direction <= 0) {
      node.inputEdges.push(this);
    }
    if(direction >= 0) {
      node.outputEdges.push(this);
    }
    node.edges.push(this); // duplication?
    return true;
  }
  // passes -1,0,1 to _linkTo as direction... odd?
  // i believe direction === weight in graph theory...
  // but maybe not. distance is also a term,  here.
  link(inputNode, outputNode, duplex) {
    this.unlink();
    this.inputNode = inputNode;
    this.outputNode = outputNode;
    this.duplex = !!duplex;
    if(duplex) {
      this._linkTo(inputNode, 0);
      this._linkTo(outputNode, 0);
      return this;
    }
    this._linkTo(inputNode, 1);
    this._linkTo(outputNode, -1);
    return this;
  }
  // for traversal
  setDistance(value) {
    this.distance = Math.abs(parseFloat(v) || 0);
    return this;
  }
  // weight is 1 / distance
  setWeight(value) {
    this.distance = 1 / Math.abs(parseFloat(value) || 0);
    return this;
  }
  // given a starting node, find the opposite
  oppositeNode(node) {
    if(this.inputNode === node) {
      return this.outputNode;
    } else if(this.outputNode === node) {
      return this.inputNode;
    }
    return;
  }
  // remove connection from nodes / unlink edges
  unlink() {
    let pos;
    let inode = this.inputNode;
    let onode = this.outputNode;
    if(!(inode && onode)) {
      return; // an edge has a node on both ends.
    }
    // unclear what is happening here.
    (pos = inode.edges.indexOf(this)) > -1 && inode.edges.splice(pos, 1);
    (pos = onode.edges.indexOf(this)) > -1 && onode.edges.splice(pos, 1);
    (pos = inode.outputEdges.indexOf(this)) > -1 && inode.outputEdges.splice(pos, 1);
    (pos = onode.inputEdges.indexOf(this)) > -1 && onode.inputEdges.splice(pos, 1);
    if(this.duplex) {
      (pos = inode.inputEdges.indexOf(this)) > -1 && inode.inputEdges.splice(pos, 1);
      (pos = onode.outputEdges.indexOf(this)) > -1 && onode.outputEdges.splice(pos, 1);
    }
    this.inputNode = null;
    this.outputNode = null;
    this.duplex = false;
    return true;
  }
}


// implementing an example graph
let joe = new Node('person');
joe.set('name', 'Joe');
let minecraft = new Node('game');
minecraft.set('name', 'Minecraft');
let likes = new Edge('likes');
// link nodes via edge
likes.link(joe, minecraft);
let notch = new Node('person', {name: 'Notch'});
// another link
let created = new Edge('created').link(notch, minecraft);
// bunch more

let mojang = new Node('company', {name: 'Mojang'});
let microsoft = new Node('company', {name: 'Microsoft'});
let jennifer = new Node('person', {name: 'Jennifer'});

new Edge('founded').link(notch, mojang);
new Edge('acquired').link(microsoft, mojang);
new Edge('purchased').link(jennifer, minecraft);
new Edge('prints_money_for').link(minecraft, microsoft);

/*
  Our new graph...
                    Jennifer
                       | (purchased)
                       v
  Joe --(likes)--> Minecraft <--(created)-- Notch
    (prints_money_for) |                      | (founded)
                       v                      v
                   Microsoft --(acquired)--> Mojang
*/

// TODO: GraphPrinter
// to render this out or at least create a nested array.



// in the context of users & listings:
// Nodes
let users = [];
let listings = [];
// Edges
let views = [];       // user can view listing
let favorites = [];   // user can favorite listing
let requests = [];    // user can request to book a listing

// take any set of nodes, so long as the individual nodes have an id,
// and return the node that matches provided id
let getNodeById = function(nodes, id) {
  return nodes.filter((node) => { return node.get('id') === id; });
};

// transform into our terms:
users = users.map((user) => { return new Node('user', user); });
listings = listings.map((listing) => { return new Node('listing', listing); });
views = views.map((view) => {
  return new Edge('view')
              .link(
                getNodeById(users, view.user_id),
                getNodeById(listings, view.listing_id)
              );
});
favorites = favorites.map((fav) => {
  return new Edge('favorite')
              .link(
                getNodeById(users, fav.user_id),
                getNodeById(listings, fav.listing_id)
              );
});
requests = requests.map((request) => {
  return new Edge('request')
              .link(
                getNodeById(users, request.user_id),
                getNodeById(listings, request.listing_id)
              );
});
// more important actions should be weighted more favorably
// distance is the inverse of weight
// higher weight = lower distance
// going with distance because (the author says) its easier to
// reason about when dealing with a graph
views.forEach(function(view) {
  view.setDistance(4);
});

favorites.forEach(function(favorite) {
  favorite.setDistance(2);
});

requests.forEach(function(request) {
  request.setDistance(1);
});

// now, based on users views, likes, requests, we can
// generate some meaningful insights (if we had real data)
// we can assess the similarity of listings based on
// user interactions with them.  If a user has interacted with
// two listings, the listings are likely more similar if the
// interactions are equally meaningful.

// author uses UnitGraph to do the actaul graphing.
// he mentioned Dijkstra’s Algorithm but its not apparent
// in the final code impl.  Nevertheless, this basic exercise
// is insightful.
// const ug = require('ug');
