# perma-challenge

## Contents


## Short description

### What's the problem?
**Climate change is one of the major challenges of the 21the century**. Introducing further **unpredictability in food security**, directly impacting the performance of various seeds for the next growing seasons, making our **farmers’s crops decision even riskier**.

To remain sustainable, **farming must adapt quickly** to the changing conditions of our world.

### How can technology help?
**Leveraging AI and model training**, we beleive we can - all together - provide many solutions for a **more resilient local agriculture**, leading through a **global improvement of food security**.

### The idea
ESSPERA was imagined to response to the big issue of food security from its roots. 
The idea is to **provide farmers the best seed recommendation**, thanks to agro associations' and governemental **seed trials results**. 

Helping them to make better decision with confidence to grow more resilient, we **ensure a better local food security**.
![What is ESSPERA](https://user-images.githubusercontent.com/65171375/198662592-f1c8608e-04fb-462c-986b-edebb51cfe13.png)


## Demo video

## The architecture

## Long description

## Project roadmap
![Roadmap](https://user-images.githubusercontent.com/65171375/198656432-5cd834fc-3787-4673-bdb4-ffdd5c99a0af.png)


## Getting started
### Pre-requisites
1. [IBM Cloud account](https://cloud.ibm.com) with these services:
    1. [Cloud Object Storage - Lite plan](https://cloud.ibm.com/objectstorage/create)
    2. [Watson Studio - Lite plan](https://cloud.ibm.com/catalog/services/watson-studio)
    3. [Watson Machine Learning - Lite plan](https://cloud.ibm.com/catalog/services/watson-machine-learning)
    4. [Db2 - Lite plan](https://cloud.ibm.com/catalog/services/db2)
2. In CP4D as a Service, [create a new project](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/projects.html)
3. In CP4D as a Service, [create a new deployment space](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ml-space-create.html)
4. Get an API key for [IBM Environmental Intelligence Suite - Standard Suite + Premium Weather Data APIs](https://www.ibm.com/products/environmental-intelligence-suite) (AKA The Weather Company Data APIs)
5. For local deployment for deployment and testing:
    1. Install NodeJS
    2. Install Python 3.9+
    3. Clone this repo
### Training a model and deploying to CP4D as a Service
1. Prepare a CSV based on the [template](jupyter-notebooks/Template%20NewSeedData_Crop_Seed.csv) and make sure the filename starts with "NewSeedData_" and has extension ".csv"
2. In CP4D as a Service, go to the created project and [import the file as data asset](https://dataplatform.cloud.ibm.com/docs/content/wsj/manage-data/add-data-project.html#files)
3. Navigate to the [jupyter-notebooks](jupyter-notebooks) folder and run the command: `pip install -r requirements.txt` to install the required packages to run the notebook
4. Create a .env file based on the [template](jupyter-notebooks/Template%20.env) and fill in the required values
5. Open the [Jupyter notebook](jupyter-notebooks/Seed%20Variant%20Data%20Processing.ipynb) in Visual Studio Code IDE and click on the `Run All` button to run the notebook. It will process the imported CSV, create the model, and deploy to CP4D as a Service
### Running the back-end web services used by the front-end
1. Navigate to the [Server](Server) folder and run the command: `npm install` to install the required packages to run the back-end web services
2. Edit the .env file and fill in the required value
3. To start the back-end web services, run the command: `node Server.js`
### Running the front-end web application
1. Navigate to the [front-end](front-end) folder and run the command: `npm install` to install the required packages to run the web application
2. To start the front-end web application, run the command `npm start`. It should automatically start a web browser session, otherwise from a web browser, simply go to http://localhost:3000

## Built with


## Contributing


## Versioning


## Authors

