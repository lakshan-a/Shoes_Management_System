package lk.ijse.gdse66.springboot.backend.services.util;

import java.util.UUID;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/4/2024
 */
public class UtilMatter {
    public static String generateId() {
        return UUID.randomUUID().toString();
    }
}
