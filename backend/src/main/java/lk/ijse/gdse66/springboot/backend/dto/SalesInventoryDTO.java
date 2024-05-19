package lk.ijse.gdse66.springboot.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/7/2024
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalesInventoryDTO {

    @Null
    private String id;

    @NotBlank(message = "Item code is required")
    @Pattern(regexp = "^SH\\d{3}$", message = "Invalid item code format. Must start with 'SH' followed by 3 digits.")
    private InventoryDTO inventory;

    @NotBlank(message = "Item description is required")
    @Pattern(regexp = "^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$", message = "Invalid item description format. Only alphanumeric characters and spaces are allowed.")
    private String itemDescription;

    @NotNull(message = "Size is required")
    @Pattern(regexp = "^[1-9][0-9]*$", message = "Invalid size format. Must be a positive integer.")
    private Integer size;

    @NotNull(message = "Unit price is required")
    private Double unitPriceSale;

    @NotNull(message = "Item quantity is required")
    @Pattern(regexp = "^[1-9][0-9]*$", message = "Invalid quantity format. Must be a positive integer.")
    private Integer quantity;

    private SaleDTO sales;
}
