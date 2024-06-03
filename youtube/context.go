package main

import (
	"context"
	"time"
	"fmt"
	"os"
	"bufio"
)

func main() {
	// root context
	ctx := context.Background()

	// a child of first context, will provide cancel options
	ctx, cancel := context.WithCancel(ctx)

	go func() {
		// read a string from stdin
		s := bufio.NewScanner(os.Stdin)
		s.Scan()
		// if we get anything, we will cancel the request
		cancel() 
	}()

	sleepAndTalk(ctx, 3*time.Second, "hello")
}


// should go do something...
func sleepAndTalk(ctx context.Context, d time.Duration, message string) {
	time.Sleep(d)
	fmt.Println("sleepAndTalk", ctx, "waited", d, "at time", time.Now().Unix(), message);
}