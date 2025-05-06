# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Samuel I. Gonzalez - No partner :(

### 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I don't think it would be ideal to test the "message" feature of a messaging application with a unit test; so, **no**, I wouldn't use a unit test. A "message" feature has many components: How the messages is typed, the UI for the message, how the user sends the message, how the user receives the message, how the network behaves, etc.

Because there are so many components behind the "message" feature, it would be un-ideal to implement a unit test to check all these smaller apsects in one unit test. If we were to only test one aspect of the message feature (lets say message length), it would be more ideal to implement a unit test then. However, because it is the overall message and not just one specific component I would not use a unit test.

### 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

**Yes**, I would use a unit test to test the "max message length" feature. This would probably only be implemented with a small chunk of code. A unit test could very efficiently test the feature. For instance we can make a unit test for if the message is 0 characters, if the message is under 80 characters, if it is 80 characters, and if it is over 80 characters. The check and functionality would be isolated from other components and; therefore, a unit test would be great for it.

Overall because the functionality is small and isolated, I would use a unit test to check if a user has typed over 80 characters, and make sure that when they do type 80 words, the user cannot type anymore.