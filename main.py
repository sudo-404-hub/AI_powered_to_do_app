from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/to_do_list.html")
def to_do_list():
    return render_template("to_do_list.html")



if __name__=="__main__":
    app.run(debug=True)