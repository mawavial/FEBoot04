//modelo event-driven
while (queue.waitForMessage()) {​
  queue.processNextMessage();​
}​

