package lk.ijse.gdse66.springboot.backend.services.exception;


/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/6/2024
 */
public class NotFoundException extends ServiceException{
    public NotFoundException(String message) {
        super(message);
    }
}
