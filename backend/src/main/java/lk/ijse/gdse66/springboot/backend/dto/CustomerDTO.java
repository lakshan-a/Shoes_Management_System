package lk.ijse.gdse66.springboot.backend.dto;

import lk.ijse.gdse66.springboot.backend.util.CustomerLoyaltyLevel;
import lk.ijse.gdse66.springboot.backend.util.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.security.Timestamp;
import java.util.Date;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/4/2024
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDTO implements Serializable {

    private String code;
    private String name;
    private String email;
    private Gender gender;
    private String contact;
    private Date dob;
    private String addressLine1;
    private String addressLine2;
    private Date loyaltyDate;
    private CustomerLoyaltyLevel loyaltyLevel;
    private Integer loyaltyPoints;
//    private Timestamp recentPurchaseDate;


}
