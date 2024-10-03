package it.ferrys.javalincorstest.server;

import io.javalin.Javalin;

public class Server {

    public static void main(String[] args) {

        Javalin javalin = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(rule -> {
                    rule.reflectClientOrigin = true;
                });
            });
        });

        javalin.get("/check", ctx -> {
            ctx.result("CORS works - " + System.currentTimeMillis());
        });

        javalin.start(93);

    }

}
