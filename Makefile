update:
	git fetch
	git fetch --all --tags

# Simple hello world
v1.0:
	javac Main.java
	java Main

# Simple hello world with package
#
#.
#├── Makefile
#├── Readme.md
#└── src
#    └── main
#        └── java
#            └── io
#                └── spweb
#                    ├── Main.class
#                    └── Main.java
#
v2.0:
	javac src/main/java/io/spweb/Main.java
	export CLASSPATH=$CLASSPATH:./src/main/
	java io.spweb.Main
