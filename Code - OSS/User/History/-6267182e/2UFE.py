# import none
import requests
from bs4 import BeautifulSoup
import csv
import os
import pymongo
from pymongo import MongoClient

#title, imageurl, source, description, url, dateTime, topic

url = 'https://bdnews24.com/'

#To send data to mongdb
MONGO_URI = 'mongodb+srv://demo_user:tNwYzQbHbta4j_G@newszen.eup0l.mongodb.net/?retryWrites=true&w=majority&appName=Newszen'
COllECTION_NAME = 'youtube'
DATABASE_NAME = 'mydatabase'
client = MongoClient(MONGO_URI)

database = client[DATABASE_NAME]
collection = database[COllECTION_NAME]

def fetch_article_data(url):

    response = requests.get(url)
    client = pymongo.MongoClient(MONGO_URI)
    db = client[DATABASE_NAME]
    collection = db[COllECTION_NAME]


    if response.status_code != 200:
        print(f"Failed to retrieve data from {url}")
        return []

    soup = BeautifulSoup(response.content, 'html.parser')

    # articles = soup.find_all('div', class_='col-lg-3 col-md-6 order-lg-1 order-2')
    article_data = []

    news = soup.find_all('div', class_ = 'TopLeadList')

    # for article in articles:

    for news_details in news:

            title_link = news_details.find('a')['href']

            article_details_url = title_link if title_link.startswith('http') else 'No news link found'


            # print("title link is ",title_link)

            article_details = fetch_details(article_details_url)


            if article_details :
                article_data.append(article_details)

    for news in article_data:
        print(news)
        collection.insert_one(news)

    print("News data updated successfully")



    return article_data


def fetch_details(article_url) :
    response = requests.get(article_url)

    news_details = []

    if response.status_code != 200 :
        print(f"failed to retrieve data from {article_url}")
        return none

    soup = BeautifulSoup(response.content, 'html.parser')


    # print("===="*10)

    topic = soup.select_one('ul.ignore-print li:nth-child(2) a').text if soup.select_one('ul.ignore-print li:nth-child(2) a') else 'No topic found'
    # print("the topic is ", topic)


    title = soup.find('div', class_ = 'd-flex live').find('h1').text.strip()
    # print(title)

    pic_tag = soup.find('picture')
    imgsrc = ""

    if pic_tag:
        imgsrc = pic_tag.find('img', class_ = 'img-fluid')['src']
        # print(imgsrc)
    else :
        print("No imgsrc")

    # for description adding the text of all p tags

    print_section = soup.find('div', class_='details-brief dNewsDesc print-section')

    full_description = ""
    if print_section :
        description_section = print_section.find_all('p')

        for descriptions in description_section:
            # print(descriptions.get_text(strip = True))
            full_description = full_description + "\n" + descriptions.get_text(strip = True)
    else :
        print("No description found")

    # print(full_description)

    pub_section = soup.find('div', class_ = 'pub-up print-section d-lg-flex')

    if pub_section:
        date_times = pub_section.find_all('span')
        publish_time = date_times[1].get_text(strip = True)
        # print("publish time is: ", publish_time)

    # print("===="*10)

    news_details = {
        'title' : title,
        'imageurl' : imgsrc,
        'source' : 'bdnews24',
        'description' : full_description,
        'url' : article_url,
        'dateTime' : publish_time,
        'topic' : topic
    }

    return news_details


def save_to_csv(articles):
    print(articles)
    directory = 'websites'
    filename = 'scrapper_bdnews24.csv'

    os.makedirs(directory, exist_ok = True)

    file_path = os.path.join(directory, filename)

    print(file_path)

    with open(file_path, mode='w', newline='', encoding='utf-8') as file:
        headers = ['title', 'imageurl', 'source' , 'description', 'url', 'dateTime','topic']
        writer = csv.DictWriter(file, fieldnames=headers)
        writer.writeheader()
        writer.writerows(articles)


if __name__ == "_main_":

    

    # fetch_article_data(url)

    articles = fetch_article_data(url)

    save_to_csv(articles)
    print("Is the code running")
    # for article in articles:
    #     print(f"title: {article['title']}")
    #     print(f"imageurl: {article['imageurl']}")
    #     print(f"source: {article['source']}")
    #     print(f"description: {article['description']}")
    #     print(f"url: {article['url']}")
    #     print(f"dateTime: {article['dateTime']}")
    #     print(f"topic: {article['topic']}")
    #     print("-" * 40)



    