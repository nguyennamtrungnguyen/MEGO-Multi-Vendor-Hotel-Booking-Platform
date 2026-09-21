package com.mego.backend.model;
import jakarta.persistence.*;
import lombok.*;

/**
 * @author Nguyễn Nam Trung Nguyên
 * @version 1.0
 * @MSSV 23640731
 * @Class DHKTPM19ATT
 * @since 9/21/2026
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class VerificationCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String otp;

    private String email;

    @OneToOne
    private User user;

    @OneToOne
    private Seller seller;
}
