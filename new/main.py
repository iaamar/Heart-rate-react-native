from flask import Flask, render_template, request, url_for, Response

# EDA Packages
import pandas as pd
import numpy as np

# ML Packages
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)


@app.route("/")
def chech():
    return render_template('chech.html')


@app.route("/predict", methods=['GET'])
def predict():
    # Link to dataset   
    url = "https://raw.githubusercontent.com/Amarn7/Data-Science/master/data.csv"
    df = pd.read_csv(url)

    # Features and Labels
    df_x = df.drop('CONTENT')
    df_y = df['CLASS']
   
    # Fit the Data
    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(df, df_y, test_size=0.33, random_state=42)

    from sklearn.svm import SCV
    



    # if request.method == 'POST':
    # comment = request.form['comment']
    # data = [comment]
    # vect = cv.transform(data).toarray()
    # my_prediction = clf.predict(vect)

    return render_template('r.html')


if __name__ == '__main__':
    app.run(debug=True)

