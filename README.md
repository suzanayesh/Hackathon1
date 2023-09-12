# Hackathon1
# Computer Vision Hackathon

Welcome to our very first hackathon! 🎉 We will be creating an ExpressJS application that taps into the thrilling world of AI & computer vision. And guess what? You're not building anything from scratch! 🚀 You'll be leveraging AWS AI services to effortlessly build a great project. Let the coding magic begin! 💻🔥

## Introduction to Amazon AI Services:

 Amazon AI Services is a suite of artificial intelligence offerings by Amazon Web Services (AWS) designed to put machine learning in the hands of every developer. With a blend of intuitive tools, powerful algorithms, and pre-trained models, it allows businesses to solve a+ wide set of challenges, from chatbots to predictive analytics.

In this task, we will be concentrating on one particularly powerful service: **AWS Rekognition**

## **AWS Rekognition**

Among the many AI tools AWS offers, Rekognition stands out as its prime solution for image and video analysis. AWS Rekognition eliminates the need to develop deep learning algorithms and models from scratch. It seamlessly identifies objects, people, text, scenes, and activities in images and videos, and it even detects any inappropriate content.

Visit the service page [here](https://aws.amazon.com/rekognition/) to explore its various features and use cases.

## Challenge Description:

Our final objective is to launch an ExpressJS application that offers its users three primary functionalities:

- Identification of all object, scenes, and actions within an image.

![image](https://github.com/suzanayesh/Hackathon1/assets/100838193/e4e5642e-65e1-44e5-b230-92ce1e890f9f)

- Recognition of celebrity faces, accompanied by their names and a confidence score 🌟.

![image](https://github.com/suzanayesh/Hackathon1/assets/100838193/e0377e35-4623-46f2-a114-7e8f487cb1bd)

- Extraction of text from images 📜.

![image](https://github.com/suzanayesh/Hackathon1/assets/100838193/1c5c9de2-62d4-4f41-9f4e-a4f9ea2c69cf)

Results should be returned in JSON format, and additionally stored in a database. The application should also feature an endpoint to retrieve a history of past search outcomes.

The application must be highly available and scalable and uses AWS RDS as a database.

## Challenge Description:

We're diving right in! 🚀 We'll be developing our application using a lean approach. To make things interesting, we'll break our code development into checkpoints 🎯. Each checkpoint carries its own set of points, and guess what? We're tracking everyone's scores on a lively dashboard 📊. Once you nail a checkpoint, give a shout-out to one of our awesome training staff to check it out! 👩‍💻👨‍💻 Let's get coding💥

## ⛳ **Checkpoint 1: Dive Into Basics** ↗️ - 100XP

- Kickstart a basic NodeJS application.
- Dive deep into AWS SDK; don't forget to install the JS SDK.
- Generate an AWS IAM key, ensuring it has full access.

## ⛳ **Checkpoint 2: Say Hello to Rekognition 📸 - 500XP**

- Familiarize yourself with Rekognition SDK.
- Script a function to load an image, send it to Rekognition to identify objects, and log the JSON result.

## ⛳ **Checkpoint 3: Express Yourself with ExpressJS 🚂 - 200XP**

- Get your ExpressJS application up and running.
- Create an endpoint that takes in an image. Then, bring in your code from the second checkpoint to chat with Rekognition and return the result as a response.

## ⛳ **Checkpoint 4: Add More Magic ✨ - 250XP**

- Roll up your sleeves and integrate two additional API calls: one to spot celebrities and another to extract text from an image.

## ⛳ Checkpoint 5: History Keeper 🗃️ **- 300XP**

- Link your application to a local database.
- Preserve a log of each request's outcome: save the image path as a string and the glittering JSON result from the API.

## ⛳ Checkpoint 6: **Launch into the Clouds ☁️🚀 400XP**

- Migrate your database game by transitioning it to RDS.
- Deploy your Project into an ASG, setting it comfortably behind a load balancer.

## ⛳ Checkpoint 7: Implement a GUI ☁️🚀 300XP

- Familiarize yourself with the ExpressJS Template Engine.
- Design an appealing interface for your application.

## ****⛳ Checkpoint 8: Integrate with w S3 ☁️🚀 600XP****

- Set up an AWS S3 bucket for your project.
- Integrate AWS SDK into your application.
- Implement file upload functionalities using S3.
- Update your history table to store the uploaded file S3 link.

