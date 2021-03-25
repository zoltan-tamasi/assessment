### Usage

```
npm i
node app.js
```
with env variables:
```
env STORE=file.json PORT=4000 node app.js
```

### Run tests

```
npm run test
```

### Example usage

```
$ curl -X POST -H 'Content-type: application/json' -d '{"text":"todoItem", "priority":3, "done":"false"}' localhost:3000/todos
{"text":"todoItem","priority":3,"done":"false","id":"eebdd480-8d6a-11eb-9300-7d7f3bfbac09"}

$ curl localhost:3000/todos
[{"id":"86a4d770-8d67-11eb-a3aa-511598a3fca0","text":"todoItem","priority":3,"done":false},{"id":"9eab5ab0-8d67-11eb-b521-e9d48378e61d","text":"todoItemc","priority":5,"done":false},{"text":"todoItem","priority":3,"done":"false","id":"eebdd480-8d6a-11eb-9300-7d7f3bfbac09"}]

$ curl -X PUT -H 'Content-type: application/json' -d '{"priority":5, "done":"true"}' localhost:3000/todos/eebdd480-8d6a-11eb-9300-7d7f3bfbac09
{"text":"todoItem","priority":5,"done":"true","id":"eebdd480-8d6a-11eb-9300-7d7f3bfbac09"}

$ curl -X DELETE localhost:3000/todos/eebdd480-8d6a-11eb-9300-7d7f3bfbac09
{"message":"Todo item with id: eebdd480-8d6a-11eb-9300-7d7f3bfbac09 successfully deleted"}
```

