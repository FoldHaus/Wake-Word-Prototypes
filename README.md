# Wake Word Detection Prototypes

Each subdirectory in this repository contains code and/or instructions for running a separate wake word detection prototype. By exploring a variety of different directions, we hope to find tools that will allow us to build speech-based interactions for future projects.

Our ideal approach will:
- Perform consistently offline (without internet connection).
- Enable a straightforward approach adding one or more custom wake word.
- Work well on a variety of operating systems.
- Not be required to run in a web browser.

## Directions for Exploration

### Open Source Tools
[Rhasspy](https://github.com/rhasspy/rhasspy): This open-source project aims to handle a few speech-related topics, including wake word detection. It has patterns and infrastructure in place for HTTP, MQTT, and Websockets and some defined integrations for things like Node-RED, etc. It also comes with an interface for configuring, training, and testing wake word models which is a small nice-to-have.

### Paid Services
[Porcupine](https://picovoice.ai/products/porcupine/): This seems to be the most performant, stable, and well-maintained option for offline wake word detection. Unfortunately, this is not a free service and we would need to license their software in order to use it (or test it, it seems). Prices aren’t communicated publicly online, so we've submitted a request to get in contact with one of their representatives.
[Snowboy](https://snowboy.kitt.ai/): Allows you to add samples of your wake word through and online interface, and then download a re-trained model, which is a simple/useful way of training that might allow us all to easily add samples to our model. That said, the library doesn’t seem very well-maintained (lots of GitHub issues stacking up) and they have a lot of issues on Python 3, which makes it a bit more complicated to get setup (but hopefully not impossible). They have a hobby plan, but our use case would probably require paying for the business option (they don’t communicate costs publicly on their website).

### Make Our Own Model
[Teachable Machine (Audio Recognition)](https://teachablemachine.withgoogle.com/train/audio): This is the easiest way to train a machine learning model. You can use their tool to record a variety of different audio samples, train a model, and test it with mic input all in one browser interface. It produces a Tensorflow.js model. It seems that the creators of this tool expect these audio recognition models to be run in a browser context, but it’d be more ideal for our use case to run this in Node.js (which theoretically should be possible).
Custom (Tensorflow/PyTorch) Model: We could also train our own wake word model from scratch with raw Tensorflow/PyTorch code. There are some good tutorials out there for this, but it’s a much more involved process that will take longer but that may also give us more control. 


A possible risk for all these cases, but especially for the “Make Our Own Model” and “Open Source Tools” Unless we were to use wake words that are already contained in public speech command datasets like the ones from Google or Kaggle, which include numbers and commands like up/down/left/go/etc), we’d need to collect a lot of our own samples in order to make a wake word detection system that’s somewhat universal. We might also need to do retraining on site to match the background noise expectations for the location. Not certain about this yet.

## Comparison Matrix
TODO