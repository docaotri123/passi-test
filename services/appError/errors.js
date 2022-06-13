const AppError = require('./base');
const HttpStatus = require('./httpStatus');

module.exports = {
    GeneralInternalServerError: (details, stack) =>
        new AppError(
            'GeneralInternalServerError',
            HttpStatus.InternalServerError,
            details,
            stack
        ),
    GeneralBadRequest: () =>
        new AppError('GeneralBadRequest', HttpStatus.BadRequest),
    GeneralForbidden: () =>
        new AppError('GeneralForbidden', HttpStatus.Forbidden),
    GeneralInvalidParameters: (details) =>
        new AppError(
            'GeneralInvalidParameters',
            HttpStatus.BadRequest,
            details
        ),
    GeneralInvalidContentType: () =>
        new AppError('GeneralInvalidContentType', HttpStatus.BadRequest),
    GeneralDatabaseError: () =>
        new AppError('GeneralDatabaseError', HttpStatus.InternalServerError),
    GeneralDuplicatedInformation: () =>
        new AppError('GeneralDuplicatedInformation', HttpStatus.BadRequest),
    GeneralNotFound: () => new AppError('GeneralNotFound', HttpStatus.NotFound),
    GeneralInvalidRequest: () =>
        new AppError('GeneralInvalidRequest', HttpStatus.NotFound),
    GeneralLimitNumberOfFiles: () =>
        new AppError('GeneralLimitNumberOfFiles', HttpStatus.BadRequest),
    UserInternalServerError: () =>
        new AppError('UserInternalServerError', HttpStatus.InternalServerError),
    UserEmailExists: () =>
        new AppError('UserEmailExists', HttpStatus.BadRequest),
    UserEmailInvalid: () =>
        new AppError('UserEmailInvalid', HttpStatus.BadRequest),
    UserStripeNotFound: () =>
        new AppError('UserStripeNotFound', HttpStatus.BadRequest),
    RecoveryEmailShouldDifferentEmail: () =>
        new AppError(
            'RecoveryEmailShouldDifferentEmail',
            HttpStatus.BadRequest
        ),
    UserUsernameExists: () =>
        new AppError('UserUsernameExists', HttpStatus.BadRequest),
    UserNotFound: () => new AppError('UserNotFound', HttpStatus.NotFound),
    NotAuthorized: () => new AppError('NotAuthorized', HttpStatus.BadRequest),
    UserOrCenterNotFound: () =>
        new AppError('UserOrCenterNotFound', HttpStatus.NotFound),
    UserEmptyBody: () => new AppError('UserEmptyBody', HttpStatus.BadRequest),
    UserInvalidRequest: () =>
        new AppError('UserInvalidRequest', HttpStatus.BadRequest),
    AdminEmailWrongFormat: () =>
        new AppError('AdminEmailWrongFormat', HttpStatus.BadRequest),
    AdminInvalidPassword: () =>
        new AppError('AdminInvalidPassword', HttpStatus.BadRequest),
    AdminNotFound: () => new AppError('AdminNotFound', HttpStatus.NotFound),
    KnovoAdminNotFound: () =>
        new AppError('KnovoAdminNotFound', HttpStatus.NotFound),
    RoleNotFound: () => new AppError('RoleNotFound', HttpStatus.NotFound),
    RoleEmptyBody: () => new AppError('RoleEmptyBody', HttpStatus.BadRequest),
    UserRoleNotFound: () =>
        new AppError('UserRoleNotFound', HttpStatus.BadRequest),
    UserRoleExists: () => new AppError('UserRoleExists', HttpStatus.BadRequest),
    PermissionInvalidPermission: () =>
        new AppError('PermissionInvalidPermission', HttpStatus.BadRequest),
    SubjectNotFound: () => new AppError('SubjectNotFound', HttpStatus.NotFound),
    SubjectExistedCode: () =>
        new AppError('SubjectExistedCode', HttpStatus.BadRequest),
    CountryNotFound: () => new AppError('CountryNotFound', HttpStatus.NotFound),
    CountryExistedCode: () =>
        new AppError('CountryExistedCode', HttpStatus.BadRequest),
    SystemNotFound: () => new AppError('SystemNotFound', HttpStatus.BadRequest),
    SystemExistedCode: () =>
        new AppError('SystemExistedCode', HttpStatus.BadRequest),
    TeachingLevelNotFound: () =>
        new AppError('TeachingLevelNotFound', HttpStatus.NotFound),
    TeachingLevelExistedCode: () =>
        new AppError('TeachingLevelExistedCode', HttpStatus.NotFound),
    SubjectCombinationNotFound: () =>
        new AppError('SubjectCombinationNotFound', HttpStatus.NotFound),
    SubjectCombinationExists: () =>
        new AppError('SubjectCombinationExists', HttpStatus.BadRequest),
    LanguageNotFound: () =>
        new AppError('LanguageNotFound', HttpStatus.NotFound),
    CenterNotFound: () => new AppError('CenterNotFound', HttpStatus.NotFound),
    CenterEmptyBody: () =>
        new AppError('CenterpriseEmptyBody', HttpStatus.BadRequest),
    CenterAdminCannotCreateUserType: () =>
        new AppError('CenterAdminCannotCreateUserType', HttpStatus.Forbidden),
    AdhocRequestNotFound: () =>
        new AppError('AdhocRequestNotFound', HttpStatus.NotFound),
    AdhocRequestAttachmentNotFound: () =>
        new AppError('AdhocRequestAttachmentNotFound', HttpStatus.NotFound),
    AdhocRequestEmptyBody: () =>
        new AppError('AdhocRequestEmptyBody', HttpStatus.BadRequest),
    AdhocRequestConfirmed: () =>
        new AppError('AdhocRequestConfirmed', HttpStatus.BadRequest),
    AdhocRequestInvalidFileName: () =>
        new AppError('AdhocRequestInvalidFileName', HttpStatus.BadRequest),
    AdhocBidNotFound: () =>
        new AppError('AdhocBidNotFound', HttpStatus.NotFound),
    AdhocBidEmptyBody: () =>
        new AppError('AdhocBidEmptyBody', HttpStatus.BadRequest),
    AdhocBidConfirmed: () =>
        new AppError('AdhocBidConfirmed', HttpStatus.BadRequest),
    AdhocBidExists: () => new AppError('AdhocBidExists', HttpStatus.BadRequest),
    AdhocBidInvalid: () =>
        new AppError('AdhocBidInvalid', HttpStatus.BadRequest),
    ResourceNotFound: () =>
        new AppError('ResourceNotFound', HttpStatus.NotFound),
    ResourceNotAllow: () =>
        new AppError('ResourceNotAllow', HttpStatus.BadRequest),
    ReviewRequiredComment: () =>
        new AppError('ReviewRequiredComment', HttpStatus.BadRequest),
    UserAlreadyPurchasedClass: () =>
        new AppError('UserAlreadyPurchasedClass', HttpStatus.BadRequest),
    CampaignNotFound: () =>
        new AppError('CampaignNotFound', HttpStatus.NotFound),
    CampaignInvalidFileName: () =>
        new AppError('CampaignInvalidFileName', HttpStatus.BadRequest),
    ClassNotFound: () => new AppError('ClassNotFound', HttpStatus.NotFound),
    ClassResourceNotFound: () =>
        new AppError('ClassResourceNotFound', HttpStatus.NotFound),
    ClassMissingCenter: () =>
        new AppError('ClassMissingCenter', HttpStatus.BadRequest),
    ClassMissingInstructor: () =>
        new AppError('ClassMissingInstructor', HttpStatus.BadRequest),
    ClassMissingType: () =>
        new AppError('ClassMissingType', HttpStatus.BadRequest),
    ClassInvalid: () => new AppError('ClassInvalid', HttpStatus.BadRequest),
    ClassEmptyBody: () => new AppError('ClassEmptyBody', HttpStatus.BadRequest),
    ClassExceedMaxStudent: () =>
        new AppError('ClassExceedMaxStudent', HttpStatus.BadRequest),
    ClassInvalidFileName: () =>
        new AppError('ClassInvalidFileName', HttpStatus.BadRequest),
    ClassSessionNotFound: () =>
        new AppError('ClassSessionNotFound', HttpStatus.NotFound),
    ClassSambaSessionNotFound: () =>
        new AppError('ClassSambaSessionNotFound', HttpStatus.NotFound),
    ClassSessionExpiredTime: () =>
        new AppError('ClassSessionExpiredTime', HttpStatus.BadRequest),
    ClassSessionResourceNotFound: () =>
        new AppError('ClassSessionResourceNotFound', HttpStatus.NotFound),
    ClassSessionEmpty: () =>
        new AppError('ClassSessionEmpty', HttpStatus.BadRequest),
    ClassSessionInvalid: () =>
        new AppError('ClassSessionInvalid', HttpStatus.BadRequest),
    ClassSessionInvalidFileName: () =>
        new AppError('ClassSessionInvalidFileName', HttpStatus.BadRequest),
    ClassSessionDuplicatedInformation: () =>
        new AppError(
            'ClassSessionDuplicatedInformation',
            HttpStatus.BadRequest
        ),
    ClassSessionIndexNotSequential: () =>
        new AppError('ClassSessionIndexNotSequential', HttpStatus.BadRequest),
    ClassConflictedTiming: (data) =>
        new AppError(
            'ClassConflictedTiming',
            HttpStatus.BadRequest,
            [],
            null,
            data
        ),
    ClassMissSubscriptionPlan: () =>
        new AppError('ClassMissSubscriptionPlan', HttpStatus.BadRequest),
    ClassExceedLicense: (data) =>
        new AppError(
            'ClassExceedLicense',
            HttpStatus.BadRequest,
            [],
            null,
            data
        ),
    EnterpriseNotFound: () =>
        new AppError('EnterpriseNotFound', HttpStatus.NotFound),
    CannotUpdateThePastSession: () =>
        new AppError('CannotUpdateThePastSession', HttpStatus.BadRequest),
    EnterpriseEmptyBody: () =>
        new AppError('EnterpriseEmptyBody', HttpStatus.BadRequest),
    EnterpriseCannotAssignUser: () =>
        new AppError('EnterpriseCannotAssignUser', HttpStatus.BadRequest),
    InvalidDateTimeRange: () =>
        new AppError('InvalidDateTimeRange', HttpStatus.BadRequest),
    AssignmentNotFound: () =>
        new AppError('AssignmentNotFound', HttpStatus.NotFound),
    AssignmentInvalidRequest: () =>
        new AppError('AssignmentInvalidRequest', HttpStatus.BadRequest),
    AttachmentNotFound: () =>
        new AppError('AttachmentNotFound', HttpStatus.NotFound),
    SubmissionsNotFound: () =>
        new AppError('SubmissionsNotFound', HttpStatus.NotFound),
    AssignmentInvalidFileName: () =>
        new AppError('AssignmentInvalidFileName', HttpStatus.BadRequest),
    AssignmentResourceNotFound: () =>
        new AppError('AssignmentResourceNotFound', HttpStatus.NotFound),
    EnterpriseAssignAdminInvalid: () =>
        new AppError('EnterpriseAssignAdminInvalid', HttpStatus.BadRequest),
    EnterpriseAdminCannotCreateUserType: () =>
        new AppError(
            'EnterpriseAdminCannotCreateUserType',
            HttpStatus.Forbidden
        ),
    InvalidPaymentRequest: () =>
        new AppError('InvalidPaymentRequest', HttpStatus.BadRequest),
    InvalidAmountRequest: () =>
        new AppError('InvalidAmountRequest', HttpStatus.BadRequest),
    InvalidMinSpend: (data) =>
        new AppError('InvalidMinSpend', HttpStatus.BadRequest, [], null, data),
    InsufficientBalance: () =>
        new AppError('InsufficientBalance', HttpStatus.BadRequest),
    MissingCard: () => new AppError('MissingCard', HttpStatus.BadRequest),
    InvalidLicenseAmount: () =>
        new AppError('InvalidLicenseAmount', HttpStatus.BadRequest),
    SubscriptionPackageNotFound: () =>
        new AppError('SubscriptionPackageNotFound', HttpStatus.NotFound),
    CannotUpdateLicense: () =>
        new AppError('CannotUpdateLicense', HttpStatus.BadRequest),
    CannotUpgradeSubscription: () =>
        new AppError('CannotUpgradeSubscription', HttpStatus.BadRequest),
    SubscriptionNotFound: () =>
        new AppError('SubscriptionNotFound', HttpStatus.NotFound),
    CustomerSubscribedAnotherPackage: () =>
        new AppError('CustomerSubscribedAnotherPackage', HttpStatus.BadRequest),
    ExchangeRateNotFound: () =>
        new AppError('ExchangeRateNotFound', HttpStatus.NotFound),
    TriggerPointNotFound: () =>
        new AppError('TriggerPointNotFound', HttpStatus.NotFound),
    NotificationNotFound: () =>
        new AppError('NotificationNotFound', HttpStatus.NotFound),
    NotificationFirebaseNotFound: () =>
        new AppError('NotificationFirebaseNotFound', HttpStatus.NotFound),
    NotificationRecipientExisted: () =>
        new AppError('NotificationRecipientExisted', HttpStatus.BadRequest),
    ConversationNotFound: () =>
        new AppError('ConversationNotFound', HttpStatus.NotFound),
    ChatNotFound: () => new AppError('ChatNotFound', HttpStatus.NotFound),
    ChatInvalidFileName: () =>
        new AppError('ChatInvalidFileName', HttpStatus.BadRequest),
    ChatFileNameNotFound: () =>
        new AppError('ChatFileNameNotFound', HttpStatus.BadRequest),
    CannotCancelClass: () =>
        new AppError('CannotCancelClass', HttpStatus.BadRequest),
    ClassAlreadyCancelled: () =>
        new AppError('ClassAlreadyCancelled', HttpStatus.BadRequest),
    InvalidRefundRequest: () =>
        new AppError('InvalidRefundRequest', HttpStatus.BadRequest),
    RefundRequested: () =>
        new AppError('RefundRequested', HttpStatus.BadRequest),
    RefundNotFound: () => new AppError('RefundNotFound', HttpStatus.NotFound),
    MissingCenterId: () =>
        new AppError('MissingCenterId', HttpStatus.BadRequest),
    MissingEnterpriseId: () =>
        new AppError('MissingEnterpriseId', HttpStatus.BadRequest),
    CustomerPaymentNotFound: () =>
        new AppError('CustomerPaymentNotFound', HttpStatus.BadRequest),
    CenterNotBelongToEnterprise: () =>
        new AppError('CenterNotBelongToEnterprise', HttpStatus.BadRequest),
    TransactionNotFound: () =>
        new AppError('TransactionNotFound', HttpStatus.NotFound),
    IncorrectUsernameOrPassword: () =>
        new AppError('IncorrectUsernameOrPassword', HttpStatus.BadRequest),
    ForgotPasswordError: (code) => {
        switch (code) {
            case 'CodeMismatchException':
                return new AppError(
                    'CodeMismatchException',
                    HttpStatus.BadRequest
                );
            case 'ExpiredCodeException':
                return new AppError(
                    'ExpiredCodeException',
                    HttpStatus.BadRequest
                );
            case 'InternalErrorException':
                return new AppError(
                    'InternalErrorException',
                    HttpStatus.InternalServerError
                );
            case 'InvalidLambdaResponseException':
                return new AppError(
                    'InvalidLambdaResponseException',
                    HttpStatus.BadRequest
                );
            case 'InvalidParameterException':
                return new AppError(
                    'InvalidParameterException',
                    HttpStatus.BadRequest
                );
            case 'InvalidPasswordException':
                return new AppError(
                    'InvalidPasswordException',
                    HttpStatus.BadRequest
                );
            case 'LimitExceededException':
                return new AppError(
                    'LimitExceededException',
                    HttpStatus.BadRequest
                );
            case 'NotAuthorizedException':
                return new AppError(
                    'NotAuthorizedException',
                    HttpStatus.BadRequest
                );
            case 'ResourceNotFoundException':
                return new AppError(
                    'ResourceNotFoundException',
                    HttpStatus.BadRequest
                );
            case 'TooManyFailedAttemptsException':
                return new AppError(
                    'TooManyFailedAttemptsException',
                    HttpStatus.BadRequest
                );
            case 'TooManyRequestsException':
                return new AppError(
                    'TooManyRequestsException',
                    HttpStatus.BadRequest
                );
            case 'UnexpectedLambdaException':
                return new AppError(
                    'UnexpectedLambdaException',
                    HttpStatus.BadRequest
                );
            case 'UserLambdaValidationException':
                return new AppError(
                    'UserLambdaValidationException',
                    HttpStatus.BadRequest
                );
            case 'UserNotConfirmedException':
                return new AppError(
                    'UserNotConfirmedException',
                    HttpStatus.BadRequest
                );
            case 'UserNotFoundException':
                return new AppError(
                    'UserNotFoundException',
                    HttpStatus.BadRequest
                );
            default:
                return new AppError(
                    'ForgotPasswordError',
                    HttpStatus.BadRequest
                );
        }
    },
    ChangePasswordError: (code) => {
        switch (code) {
            case 'InternalErrorException':
                return new AppError(
                    'InternalErrorException',
                    HttpStatus.InternalServerError
                );
            case 'InvalidParameterException':
                return new AppError(
                    'InvalidParameterException',
                    HttpStatus.BadRequest
                );
            case 'InvalidPasswordException':
                return new AppError(
                    'InvalidPasswordException',
                    HttpStatus.InternalServerError
                );
            case 'LimitExceededException':
                return new AppError(
                    'LimitExceededException',
                    HttpStatus.BadRequest
                );
            case 'NotAuthorizedException':
                return new AppError(
                    'NotAuthorizedException',
                    HttpStatus.BadRequest
                );
            case 'PasswordResetRequiredException':
                return new AppError(
                    'PasswordResetRequiredException',
                    HttpStatus.BadRequest
                );
            case 'ResourceNotFoundException':
                return new AppError(
                    'ResourceNotFoundException',
                    HttpStatus.BadRequest
                );
            case 'TooManyRequestsException':
                return new AppError(
                    'TooManyRequestsException',
                    HttpStatus.BadRequest
                );
            case 'UserNotConfirmedException':
                return new AppError(
                    'UserNotConfirmedException',
                    HttpStatus.BadRequest
                );
            case 'UserNotFoundException':
                return new AppError(
                    'UserNotFoundException',
                    HttpStatus.BadRequest
                );
            default:
                return new AppError(
                    'ChangePasswordError',
                    HttpStatus.BadRequest
                );
        }
    },
    UserAlreadyRating: () =>
        new AppError('UserAlreadyRating', HttpStatus.BadRequest),
    RatingInvalid: () => new AppError('RatingInvalid', HttpStatus.BadRequest),
    RatingMustWithin30Days: () =>
        new AppError('RatingMustWithin30Days', HttpStatus.BadRequest),
    InvalidNameWorkSheet: () =>
        new AppError('InvalidNameWorkSheet', HttpStatus.BadRequest),
    InvalidIndexColumn: () =>
        new AppError('InvalidIndexColumn', HttpStatus.BadRequest),
    EmptyFile: () => new AppError('EmptyFile', HttpStatus.BadRequest),
    InvalidDataExcel: (data) =>
        new AppError('InvalidDataExcel', HttpStatus.BadRequest, [], null, data),
    FileNotFound: () => new AppError('FileNotFound', HttpStatus.NotFound),
    PromoCodeExisted: () =>
        new AppError('PromoCodeExisted', HttpStatus.BadRequest),
    PromoCodeNotFound: () =>
        new AppError('PromoCodeNotFound', HttpStatus.NotFound),
    PromoCodeUsed: () => new AppError('PromoCodeUsed', HttpStatus.BadRequest),
    CannotUsePromoCode: () =>
        new AppError('CannotUsePromoCode', HttpStatus.BadRequest),
    PromoCodeExpired: () =>
        new AppError('PromoCodeExpired', HttpStatus.BadRequest),
    InvalidPromoCode: () =>
        new AppError('InvalidPromoCode', HttpStatus.BadRequest),
    InvalidPromoCodeForEnterprise: () =>
        new AppError('InvalidPromoCodeForEnterprise', HttpStatus.BadRequest),
    ExceedUsageTotalPromoCode: () =>
        new AppError('ExceedUsageTotalPromoCode', HttpStatus.BadRequest),
    PaymentTransactionNotFound: () =>
        new AppError('PaymentTransactionNotFound', HttpStatus.NotFound),
};
