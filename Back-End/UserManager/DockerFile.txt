FROM openjdk:8
ADD /target/UserManager-0.0.1-SNAPSHOT.jar UserManager-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "UserManager-0.0.1-SNAPSHOT.jar"] 