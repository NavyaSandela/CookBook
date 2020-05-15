FROM openjdk:8
EXPOSE 8085
ADD /target/spring-cloud-zuul-gateway-2-0.0.1-SNAPSHOT.jar spring-cloud-zuul-gateway-2-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "spring-cloud-zuul-gateway-2-0.0.1-SNAPSHOT.jar"] 