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
	export CLASSPATH=$CLASSPATH:./src/main/
	javac src/main/java/io/spweb/Main.java
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
	export CLASSPATH=$CLASSPATH:./src/main/
	javac src/main/java/io/spweb/Main.java
	java io.spweb.Main


# v2.2 using lib
#
#.
#├── io
#│   └── spweb
#│       ├── Main.class
#│       ├── Main.java
#│       ├── model
#│       │   ├── User.class
#│       │   └── User.java
#│       └── repository
#│           ├── UserRepository.class
#│           ├── UserRepositoryFileImpl.class
#│           ├── UserRepositoryFileImpl.java
#│           └── UserRepository.java
#└── log4j-application.log
#
# under src/main/java
# javac -cp "../../../lib/log4j-1.2.17.jar:." io/spweb/Main.java
# java -cp "../../../lib/log4j-1.2.17.jar:../resources:." io.spweb.Main
