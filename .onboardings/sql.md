# SQL basics

Query and update an SQL database.

## 1. PostgreSQL

This project uses the [PostgreSQL database](https://www.postgresql.org/).

  - [ ] Make sure it is installed and running in your environment. This can be done by executing [`pg_ctl --help`](https://www.postgresql.org/docs/current/app-pg-ctl.html) in the terminal. If a help text for the command is displayed, then it can be assumed that PostgreSQL is installed. If not, checkout [Postgres.app](https://postgresapp.com/).
  - [ ] Confirm you can [connect to your local server](https://www.postgresqltutorial.com/postgresql-getting-started/connect-to-postgresql-database/).
  - [ ] It's also convenient to have a GUI DB tool like [DBeaver](https://dbeaver.io/), [pgAdmin](https://www.pgadmin.org/download/) or [TablePlus](https://www.tableplus.io/).
  - [ ] Check out the sample database [here](https://www.postgresqltutorial.com/postgresql-sample-database/). Load it into your local server [following these instructions](https://www.postgresqltutorial.com/postgresql-getting-started/load-postgresql-sample-database/).  

## 2. Querying Data

Follow these tutorials from the section 1 of the [Basic PostgreSQL Tutorial](https://www.postgresqltutorial.com/):

  - [ ] [SELECT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/).
  - [ ] [Column Alias](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-column-alias/).
  - [ ] [ORDER BY](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-order-by/).
  - [ ] [SELECT DISTINCT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select-distinct/).

Complete and upload the following queries:

### 2.1 Customer report

Return a list of all customers in the `customer`. Sort the result by name, alphabetically. The result should have the following columns:
- `name`: Shortened first name + last name, separated by a dot. For example, "Firstname Lastname" should become "F. Lastname".
- `email`: The email of the customer.
- `Report Version`: Hardcode this column to always have a value of `2`, regardless of the customer. Lets assume we want this column for some external system or integration.

Example of expected result:

| name     | email                   | Report Version |
| ---      | ---                     | --- |
| J. Doe   | johndoe@example.com     | 2 |
| R. Stone | robertstone@example.com | 2 |

_Tip_: use the [LEFT(string, n)](https://www.postgresqltutorial.com/postgresql-string-functions/postgresql-left/) operator to shorten the first name

### 2.2 Checking the options

The `film` table has a `rating` column which indicates the audience rating for the film. Return a list of all the different ratings available. Each rating should only appear in the result once. The result should have the following columns:
- `rating`: a film rating

Example of expected result:

|rating|
|------|
|G     |
|PG    |
|PG-13 |
|...   |


## 3. Filtering Data

Follow these tutorials from the section 2 of the [Basic PostgreSQL Tutorial](https://www.postgresqltutorial.com/):

  - [ ] [WHERE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/).
  - [ ] [FETCH](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-fetch/).
  - [ ] [IN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-in/).
  - [ ] [BETWEEN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-between/).
  - [ ] [LIKE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-like/).
  - [ ] [IS NULL](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-is-null/).

Complete and upload the following queries:

### 3.1 Movies for the kids

Return all G, PG or PG-13 rated films that are also cheap (rental_rate <= 1).
With the sample database this should return 198 rows. The result columns should be: `title`, `rental_rate`, `rating`.

Make a query using `OR`, another one using `IN` and another one using `NOT IN`. For the last variant, use the list of different ratings obtained in one of the previous tasks to determine which ratings need to be excluded to get the same result

### 3.2 I have a particular amount of time

Return all films that are more than one hour long, but less than one and a half hours long. Shortest movies should appear first in the result. The result's columns should be `title` and `length`. Assume the `length` column is in minutes.

### 3.3 Always have time for crocodiles

Return the **top 10 longest** films that have the word `Crocodile` in the description. The result should have columns: `title`, `description` and `length`.

Make a query using `LIMIT`, and another one using `FETCH`. Make a query that  returns the next 10 (second page, 11-20), instead of the top 10 (1-10).

### 3.4 Simple addresses

Return all `address` rows that have a `NULL` value in `address2`. With the sample database this should return 4 rows. The result must select columns `address_id` and `address`.

## 4. Joining Multiple Tables

Follow these tutorials from the section 3 of the [Basic PostgreSQL Tutorial](https://www.postgresqltutorial.com/):

  - [ ] [Joins](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/).
  - [ ] [Table Aliases](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-alias/).
  - [ ] [INNER JOIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-inner-join/).
  - [ ] [LEFT JOIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-left-join/).
  - [ ] [FULL OUTER JOIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-full-outer-join/).

Complete and upload the following queries:

### 4.1 Staff, store, city and address

Make a query that returns a list of staff and store they work, including the cities and address for both. The columns of the result should be:
- `staff_name`: Concatenation of `first_name` and `last_name`.
- `staff_city`: the `city` of the `staff`.
- `staff_address`: the `address` of the `staff`.
- `store_id`.
- `store_city`: the `city` of the `store`.
- `store_address`: the `address` of the `store`.

The result should be ordered by `staff_name`, in ascending alphabetical order.

### 4.2 Films by stores

Return a relationship between films and stores, with a row for each film that is stored in each store. The result should have two columns: `film_id` and `store_id`. Films that are not in any store, should have a `NULL` value for `store_id`. Records must be given in ascending order, first by `film_id` and then by `store_id`.

## 5. Grouping Data

Follow these tutorials from the section 4 of the [Basic PostgreSQL Tutorial](https://www.postgresqltutorial.com/):

  - [ ] [GROUP BY](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-group-by/).
  - [ ] [HAVING](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-having/).
  - [ ] [CASE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-case/)

Complete and upload the following queries:

### 5.1 Staff by store

Make a query that returns a list of stores with the amount of staff working on each. The columns of the result should be: `store_id`, `staff_count`. The result should be order by descending `staff_count`.

### 5.2 Rare movies

Return a list of movies which have 2 or fewer (zero included) copies per store.

For example if a store has 5 and another has 2, we should show 1 row for that film in the result.

If neither store has the film we should show 1 row for that film, with `store_id = null` and `store_copy_count = 0`.

The result should have the columns: `film_id`, `title`, `store_id` and `store_copy_count`.

`store_id` should be null in the result if the movie is not in any store.

The result must be ordered by descending `store_copy_count`, then by ascending `film_id`.

## 6. Set Operations & Subqueries

Follow these tutorials from sections 5 & 7 of the [Basic PostgreSQL Tutorial](https://www.postgresqltutorial.com/):

  - [ ] [UNION](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-union/).
  - [ ] [INTERSECT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-intersect/).
  - [ ] [Subquery](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-subquery/).

Complete and upload the following queries:

### 6.1 Union of customers

Pick from the sample database one country and one city outside of that country. Make a query that returns a list of customers either in the selected country or in the selected city. You must use the `UNION` operation to resolve this. The result must have only one column `customer_id`, in ascending order.

### 6.2 Matching names with intersect

Make a query that returns all customers that share first_name with a staff member.

The result must have all the columns from the `customer` table.

You must use the `INTERSECT` operation to determine the shared names.

You must use the result of the intersection as a subquery to filter the customers.

### 6.3 Matching names with EXISTS

Same as the previous "6.2 Matching names with intersect" task, but using `EXISTS` instead of `INTERSECT` in the subquery.

### 6.4 Actors grouped by subquery

Calculate the amount of movies that each actor participates in. Return the average of that amount for all actors.

The query should return one row, with one column named `actor_avg`.

## 7. Modifying Data

Follow these tutorials from the section 9 of the [Basic PostgreSQL Tutorial](https://www.postgresqltutorial.com/):

  - [ ] [INSERT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert/).
  - [ ] [UPDATE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update/).
  - [ ] [UPDATE JOIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update-join/).
  - [ ] [DELETE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete/).

Complete and upload the following statements:

### 7.1 New movies

Insert at least new movies that do not exist already in the sample database. This should impact tables `film`, `film_actor`, `actor` and `language`. The field `description` should be empty, but `fulltext` must be set. You can refer to [IMDB](https://www.imdb.com/) for data.

### 7.2 New movies' description

Make an `UPDATE` statement to set the `description` column in the `film` table for all records that have an empty `description`. The new value must be the `title` of the film, with the `release_year` added at the end.

### 7.3 Delete new movies.

Delete one of the movies inserted in the statement 7.1. The records from `actor` and `language` should only be removed if there are no records in `film` relating to them. This can be done in multiple `delete` statements. Consider using a [transaction](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-transaction/).

## 8. Advanced queries

### 8.1 Insert Into Select

Read about [INSERT INTO SELECT](https://www.w3schools.com/sql/sql_insert_into_select.asp).

Run the following query to create a test table:

```sql
DROP TABLE IF EXISTS rare_movies_snapshot;

CREATE TABLE rare_movies_snapshot (
  id SERIAL PRIMARY KEY,
  film_title VARCHAR(255) NOT NULL,
  store_id smallint,
  store_copy_count smallint not null,
  snapshot_date date not null
);
```

We want to keep a permanent record of what are the rare movies at the current point in time.

Define an `INSERT` query (based on the query defined in task "5.2 Rare movies") to store all rare movies into the `rare_movies_snapshot` table. `snapshot_date` should be the date the `INSERT` was run, you can use [NOW()](https://www.postgresqltutorial.com/postgresql-date-functions/postgresql-now/) to get it.
