FROM openjdk:8
EXPOSE 8761
ADD /target/spring-cloud-eureka-server-0.0.1-SNAPSHOT.jar spring-cloud-eureka-server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "spring-cloud-eureka-server-0.0.1-SNAPSHOT.jar"] 