import os
import time
import MySQLdb


# These environment variables are configured in app.yaml.
CLOUDSQL_USER = 'root'
CLOUDSQL_PASSWORD = none


db = MySQLdb.connect(
            host=none, user=CLOUDSQL_USER, passwd=CLOUDSQL_PASSWORD)

cursor = db.cursor()

starttime = 0

while True:
    print("tick")
    time.sleep(60.0 - ((time.time() - starttime) % 60.0))



# execute SQL query using execute() method.
cursor.execute("USE RPAdb")
cursor.execute("SELECT * FROM entries WHERE status = TRUE")


# Fetch a single row using fetchone() method.
data = cursor.fetchall()
print(data)

# disconnect from server
db.close()
