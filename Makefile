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
	git checkout tags/v2.0
	javac src/main/java/io/spweb/Main.java
	export CLASSPATH=$CLASSPATH:./src/main/
	java io.spweb.Main

# add user and user repository
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
#                    ├── Main.java
#                    ├── model
#                    │   └── User.class
#                    └── repository
#                        ├── UserRepository.class
#                        └── UserRepositoryFileImpl.class
#
v2.1:
	git checkout tags/v2.1
	javac src/main/java/io/spweb/Main.java
	export CLASSPATH=$CLASSPATH:./src/main/
	java io.spweb.Main
