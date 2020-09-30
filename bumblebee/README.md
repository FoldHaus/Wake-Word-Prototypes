# Bumblebee Prototype

The [Bumblebee Hotword Detection](https://github.com/jaxcore/bumblebee-hotword-node) system use Picovoice AI to enable offline wake word. detection with Node.js.

Overall, this example is best used as a method for testing microphone quality. It's unlikely that we will move forward with this approach for Blumen Lumen 2.0.

## Pros
- Simple API for creating Node.js programs that respond to pre-trained wake words.

## Cons
- Training a custom wake word will be dependent on using [Picovoice's Porcupine](https://github.com/Picovoice/porcupine) product, which is a paid service.
- If we're using Porcupine, then we should be able to use their Node.js libraries directly. We probably don't need to use Bumblebee Hotword Detection.

## Running the Example
```
npm install
node index.js
```
Once the program, say the work "Bumblebee" into your microphone. You should see a message printed to Node.js console.