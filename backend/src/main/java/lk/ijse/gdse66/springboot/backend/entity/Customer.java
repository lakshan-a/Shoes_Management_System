package lk.ijse.gdse66.springboot.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lk.ijse.gdse66.springboot.backend.util.CustomerLoyaltyLevel;
import lk.ijse.gdse66.springboot.backend.util.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;
import java.util.Date;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/4/2024
 */

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    private String code;
    private String name;
    private String email;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String contact;
    private Date dob;
    private String addressLine1;
    private String addressLine2;
    private Date loyaltyDate;
    @Enumerated(EnumType.STRING)
    private CustomerLoyaltyLevel loyaltyLevel;
    private Integer loyaltyPoints;
    private Timestamp recentPurchaseDate;
}
