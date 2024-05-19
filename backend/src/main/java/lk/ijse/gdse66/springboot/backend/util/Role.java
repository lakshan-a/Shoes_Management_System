package lk.ijse.gdse66.springboot.backend.util;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/6/2024
 */
public enum Role {
    ADMIN,USER;

    public static Role fromString(String text) {
        if (text != null) {
            for (Role role : Role.values()) {
                if (text.equalsIgnoreCase(role.name())) {
                    return role;
                }
            }
        }
        throw new IllegalArgumentException("No constant with text " + text + " found in Role enum");
    }
}
