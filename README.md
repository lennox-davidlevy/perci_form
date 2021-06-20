## perci test form

Thought it might be useful to have several options per test, and a way I thought to do that with your call to gpt-3, was to use synonyms

First clone the repo, and create a .env file in the root

```
$ git clone https://github.com/lennox-davidlevy/perci_form.git
$ cd perci_form
$ touch .env
```

then add this line to .env

```
REACT_APP_THESAURUS_API=<api key for meriam-webster collegiate thesaurus>
```

then install dependencies

```
$ npm i
$ npm run dev
```
