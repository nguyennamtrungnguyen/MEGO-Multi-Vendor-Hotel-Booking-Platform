package com.mego.backend.config;

/**
 * @author Nguyễn Nam Trung Nguyên
 * @version 1.0
 * @MSSV 23640731
 * @Class DHKTPM19ATT
 * @since 9/21/2026
 */
public class JWT_CONSTANT {
    public static final String SECRET_KEY = System.getenv("JWT_SECRET_KEY");
    public static final String JWT_HEADER = "Authorization";
}
