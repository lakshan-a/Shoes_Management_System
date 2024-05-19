package lk.ijse.gdse66.springboot.backend.services.exception;

/**
 * @version: v0.0.1
 * @author: lakshanR
 * @date: 5/6/2024
 */
public class DuplicateRecordException extends ServiceException{
    public DuplicateRecordException(String message) {
        super(message);
    }
}
