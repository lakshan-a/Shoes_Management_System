package lk.ijse.gdse66.springboot.backend.services.exception;

public class DuplicateRecordException extends ServiceException{
    public DuplicateRecordException(String message) {
        super(message);
    }
}
