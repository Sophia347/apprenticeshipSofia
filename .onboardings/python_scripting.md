# Python Scripting

Python scripting on-boarding. Build a file-system scanning tool and a GitHub client tool

## 1. Advanced topics
- [ ] [Thinking Recursively in Python](https://realpython.com/python-thinking-recursively/).
- [ ] [Regular expressions in Python](https://docs.python.org/3/howto/regex.html).
- [ ] [Command line argument parsing](https://docs.python.org/3/howto/argparse.html).

## 2. Python recursive scripting
Write and run a simple python script.
Write a python script that receives a regular expression and a path, and prints out all the files whose **content** matches the regular expression provided.
- The search must be done recursively.
- Use `argparse` to parse the regular expression and the path.
- Use [`time.perf_counter()`](https://www.geeksforgeeks.org/time-perf_counter-function-in-python/) to measure the elapsed time.

## 3. AsyncIO
- [ ] [Async IO in Python: A Complete Walkthrough](https://realpython.com/async-io-python). Read the guide and reproduce the examples.
- [ ] [Asynchronouse in REPL](https://ipython.readthedocs.io/en/stable/interactive/autoawait.html). Using async/await in IPython.
- [ ] Modify the script from the previous section to use `asyncio` and `aiofiles`, with a queue of files to read and a pool of consumers. The number of consumers should be a parameter.

## 4. Async script - Web crawler.
Make a script that given one or more GitHub's organizations, lists all public projects, with their respective columns and cards, for each repository.
Use `asyncio` and `aiohttp`. Optionally implement a pool of consumers to limit the concurrent http requests.
Format the output in some way that lets the user to identifiy projects, columns, and cards, for each repository, at a glance.

References:
- [GitHub REST API v3 / Projects](https://docs.github.com/en/rest/reference/projects#list-organization-projects).
