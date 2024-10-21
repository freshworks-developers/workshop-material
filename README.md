# Freddy AI Copilot for Developers: A Hands-on Workshop

This repository contains code that demonstrates the Freddy AI Copilot for Developers capabilities with v2.0.6 or higher

- [Freddy AI Copilot for Developers: A Hands-on Workshop](#freddy-copilot-for-developers-a-hands-on-workshop)
  - [Workshop Agenda](#workshop-agenda)
    - [Introduction to Freddy AI Copilot for Developers and Freshworks Development Platform](#introduction-to-freddy-copilot-and-freshworks-development-platform)
    - [Setting Up Freddy AI Copilot for Developers in VS Code](#setting-up-freddy-copilot-in-vs-code)
    - [Exploring Freddy AI Copilot for Developers Features](#exploring-freddy-copilot-features)
    - [Building Use Cases with Freddy AI Copilot for Developers](#building-use-cases-with-freddy-copilot-for-developers)
      - [Use cases](#use-cases)
      - [Solution Guides](#solution-guides)
    - [Publishing Apps with Freddy AI Copilot for Developers](#publishing-apps-with-freddy-copilot)
    - [Q\&A and Conclusion](#qa-and-conclusion)
  - [Repository Structure](#repository-structure)
  - [Workshop recording](#workshop-recording)

## Workshop Agenda

### Introduction to Freddy AI Copilot for Developers and Freshworks Development Platform
**Overview of Freddy AI Copilot for Developers and its capabilities**
- It is a Generative AI powered development tool that helps you build Smarter & faster way to build reliable apps
- It is a powerful toolkit that offers features such as
  - Use case to app: Define your use case in simple words and let it create code skeleton for your use case
  - Design to Code: Build UI components by providing design as input
  - Conversation to code: Get your queries resolved via chat interface within your developer workspace
  - Explain Code: Understand code written by your team
  - Security check: Get security checks done for your code
  - Refactor: Refactor your code with best practices from AI
  - One click productivity features
    - Run App
    - Stop App
    - Pack and Publish

**Introduction to the Freshworks Development Platform**
- Powered by Neo Platform of Freshworks, the developer platform allows you to build, test and publish applications and perform customisation for Freshworks Products with ease.
- It offers range of toolkits to enable you perform same via
  - Freshworks Development SDK (FDK)
  - Methods to handle Data, Events, Interfaces and Serverless events
  - Request Templates and OAuth options to perform secure API invocations from within the apps
  - Data storage options such as Key Value Store and Entity Storage
  - Crayons UI for ease of building Freshworks like UI
  - Rest Endpoints of products for seamless integrations and many more

**Benefits of using Freddy AI Copilot for developers**
  - With Freddy you can get started quickly
  - Build apps with lightening speed
  - Integrate, test and publish apps with ease

### Setting Up Freddy AI Copilot for Developers in VS Code
- Download and install Freshworks CLI (FDK) using the [FDK Setup Guide](resources/fdk-setup-guide.pdf)
- Sign up and create developer account using the [Dev Signup Guide](https://freshworks.dev/docs/guides/setup/dev-signup/) if haven't already
- Subscribe to at least one product account using the [Product Signup Guide](https://freshworks.dev/docs/guides/setup/product-signup/) if haven't already
- Download and configure Freddy AI Copilot for Developers using [Freddy Setup Guide](resources/freddy-setup.pdf)

### Exploring Freddy AI Copilot for Developers Features
- Using Freddy to create apps for your usecase
- Leveraging it for contextual help and code suggestions
- Understanding its productivity features
- Integrated platform features such as one click app publish

### Building Use Cases with Freddy AI Copilot for Developers
- Exploring Copilot [feature doc](https://developers-staging.freshworks.com/docs/guides/fcd-setup/features/) to understand various capabilities of Freddy and how to use them

#### Use cases

- We have created a list of use cases for you to begin with listed below
  - [Use case doc for Bitly Integration with Freshdesk/Freshservice](docs/use-cases/Bitly-Freshdesk-Freshservice.md)
  - [Use case doc for Calendly Integration with Freshdesk](docs/use-cases/Calendly-Freshdesk.md) 
  - [Use case doc for GitHub Integration with Freshdesk/Freshservice](docs/use-cases/GitHub-Freshdesk.md)
  - [Use case doc for Notion Integration with Freshdesk/Freshservice](docs/use-cases/Notion-Freshdesk-Freshservice.md) 
  - [Use case doc for Shopify Integration with Freshdesk](docs/use-cases/Shopify-Freshdesk.md)
- Choose any of these use cases to begin your development journey with Freddy AI Copilot for Developers
- Each of these use cases has following segments in it
  - Problem Statement: Covers issue that a User of Freshworks Products is facing
  - Solution Overview: What can you build to solve the user issues
  - Implementation Steps: Approach that you can follow for building the solution in five to six simple steps
  - Wireframe: A rough representation of what the end solution would look like
  - Benefits: How the solution will help the user

#### Solution Guides

- We understant that the use cases can be daunting and might confuse one on how to get started or where to start from? To address the same we have created solution documents for each of these use cases
- Here is a list of solutions for the use cases
  - [Solution doc for Bitly Integration with Freshdesk/Freshservice](docs/solutions/Bitly-Freshdesk-Freshservice.md)
  - [Solution doc for Calendly Integration with Freshdesk](docs/solutions/Calendly-Freshdesk.md) 
  - [Solution doc for GitHub Integration with Freshdesk/Freshservice](docs/solutions/GitHub-Freshdesk-Freshservice.md)
  - [Solution doc for Notion Integration with Freshdesk/Freshservice](docs/solutions/Notion-Freshdesk-Freshservice.md)
  - [Solution doc for Shopify Integration with Freshdesk](docs/solutions/Shopify-Freshdesk.md)
- These solution docs contain
  - Solution Overview
  - Prerequisites
    - Necessary Account Creations and Document Links
    - Steps for How to Get API Key/Access Token
  - Detailed Implementation Steps
  - Sample App: In case you face challenges while building the use case, you can refer to the solution available under the respective sample apps

### Publishing Apps with Freddy AI Copilot for Developers
- Packaging apps built with Freddy AI Copilot for Developers as custom apps
- Submitting apps to Freshworks Marketplace
- Understanding the process of publishing apps as Marketplace apps
- Tips for successful app submissions and approvals

### Q&A and Conclusion
- Addressing any questions or concerns from participants
- Recap of key takeaways and next steps for further learning
- FAQs from various workshops and events available under [FAQs Section](resources/faq.md)

## Repository Structure

```
workshop-material/
│
├── README.md                     # Workshop overview and agenda
├── assets/                       # Folder for storing workshop images, diagrams, etc.
├── presentations/                # Folder for workshop presentation slides
├── code_samples/                 # Folder for storing code samples used in the workshop
├── docs/                         # Folder for additional workshop documentation
│   ├── solutions                 # Solutions and prompts for solving the use cases
│   └── use-cases                 # List of use cases that one can choose to build from
└── resources/                    # Folder for additional resources and references
    ├── faq.md                    # Frequently asked questions during the workshop hands-on
    ├── fdk-setup-guide.pdf       # Steps for installing FDK CLI
    ├── freddy-setup.pdf          # Steps for configuring VS code extension
    └── ...
```

## Workshop recording

This material was used to deliver Freddy AI Copilot for Developers Hands-on Lab on 7th March 2024. The recording for the workshop is available [here](https://freshworks.box.com/s/y559afhkxf02q8591js1da3yuw7938wl).
