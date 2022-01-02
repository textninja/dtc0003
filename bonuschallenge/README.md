# mdserve

Serves up markdown files from the current directory.

## Usage

`mdserve`, in the directory you want to serve markdown files from.

## Description and disclaimer

This is pretty much a normal express static server, except that whenever it
encounters Markdown files it tries to convert them to plain HTML. **It is
intended for local development of markdown files you wrote or trust, and should
not be used for anything else.** It makes no serious attempt at being secure or
even all that reliable, as it does not for example strip or sanitize its output
(by design), but for personal use it seems to work ok.
