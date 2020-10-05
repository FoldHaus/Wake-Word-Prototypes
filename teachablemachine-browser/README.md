# Teachable Machine (Browser) Prototype

Teachable Machine is a simple tool that makes it easy for anyone to train a functioning Tensorflow.js model. Teachable Machine offers an audio model training process, which has been used in this example to create a wake word detection for the word "Bloom".

This model runs in the browser and can function locally if the necessary model files are downloaded locally. The browser requirement for this approach is non-optimal for our use cases, since running a headless browser with microphone access would be required to make this work. That said, the ease of using Teachable Machine might provide some helpful flexibility.

## Pros
- Incredibly quick and easy to train an audio model that can be used for wake word detection.
- Simple interface and approach for adding new wake words to the model.
- Completely free

## Cons
- Needs to be running in the browser
    - Ideally, we could run this with tensorflow-node, but the speech-command model requires browser-based FFT functionality. We can check in with some folks work on Tensorflow to see if there's a workaround for this.

## Running the Example
Start a local server that serves this directory. For example, using Python3 the command would be:
```
python -m http.server
```
Once it's running, visit http://localhost:8000/. Say "Bloom" to trigger the detection. Open the JS console to see the wake word detection logging.