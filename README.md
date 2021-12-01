<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://images.ctfassets.net/dp3dhjthjc5k/5dsyQNbMaHZiPYooxNXSGY/04669f75a7da657a19452f1151ae8449/logoWhite-43911d75e3e207f3b3b2dbfae29fe6fc.svg" width="60" style="margin-top: 20px;background-color: black; display: block; padding: 20px; border-radius: 10%;"/>
  </a>
</p>
<h1 align="center" style="margin-botom: 20px">
  JPS Website
</h1>

## 🚀 Quick start

1.  **Run the website locally**

    You need to create a ``` .env ``` file in the root of your local repo, and add the following contentful keys __CONTENTFUL_ACCESS_TOKEN__, and __SPACEID__

2.  **Run the website locally**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # install all the dependencies
    npm install
    
    # run the application locally
    npm run start
    ```

3.  **Learn more about gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Deployment

Deployment for this project is handled by  [AWS Amplify](https://docs.aws.amazon.com/amplify/index.html), every push to dev will trigger a deployent to [dev](https://dev.johnproctorstylist.co.uk), every push to main will trigger a deployent to [main](https://johnproctorstylist.co.uk). Also webhooks have been setup so any content changes in Contentful will also trigger new deployments for both environments.

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/username/repository)

## ✔️ Improvements 
  - Align models on Contentful with components within the application, the justification for not doing this was due to the application being very bespoke and not changing often, so I could get away with not using the Content Models in a way that would be considered best practice.

  - Use a consistent approach to styling and reuse more, I just didn't value this enough to go back and fix it as this was a small project with limited time.