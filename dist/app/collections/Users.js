"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "<a href= ".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, "'>VerifyAccount</a>");
                // PrimaryActionEmailHtml({
                // actionLabel: 'verify your account',
                // buttonText: 'Verify Account',
                // });
            },
        },
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'user',
            required: true,
            access: {
                read: function () { return true; },
                create: function () { return true; },
            },
            //   admin: {
            //     // condition: ({ req }) => req.user.role === 'admin',
            //     condition: () => false,
            //   },
            type: 'select',
            options: [
                {
                    label: 'admin',
                    value: 'admin',
                },
                {
                    label: 'User',
                    value: 'user',
                },
            ],
        },
    ],
};
