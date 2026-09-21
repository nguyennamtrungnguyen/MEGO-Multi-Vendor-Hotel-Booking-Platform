package com.mego.backend.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.mego.backend.domain.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;
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
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;

    private String fullName;

    private String phone;

    /**
     * Lưu URL ảnh đại diện
     * Ví dụ:
     * https://res.cloudinary.com/xxx/image/upload/avatar.jpg
     */
    @Column(length = 1000)
    private String avatar;

    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.CUSTOMER;

    @OneToMany
    private Set<Address> addresses = new HashSet<>();

}
