# mdserve

Serves up markdown files from the current directory.

## Usage

`mdserve`, in the directory you want to serve markdown files.

## Description and disclaimer

This is pretty much a normal expressjs static server, except that whenever it
encounters Markdown files it tries to convert them to plain HTML.

**It is intended for local development of markdown files you wrote yourself or trust completely, and
should not be used for anything else.** To wit, it makes no serious attempt at
protecting private information, is not all that reliable, and could easily
compromise sensitive or protected information as it does not, for example, strip or sanitize
its output. For personal use it seems to work ok.
