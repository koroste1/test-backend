import {HttpException, HttpStatus} from "@nestjs/common";

export class ValidationException extends HttpException{
    messages;

    constructor(props) {
        super(props, HttpStatus.BAD_REQUEST);
        this.messages = props;
    }

}
