package lk.ijse.gdse66.springboot.backend.dto;

import lk.ijse.gdse66.springboot.backend.util.SuplierCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/5/2024
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierDTO implements Serializable {

    private String code;
    private String name;
    private SuplierCategory category;
    private String addressLine1;
    private String addressLine2;
    private String addressLine3;
    private String addressLine4;
    private String addressLine5;
    private String contact_1;
    private String contact_2;
    private String email;



}
