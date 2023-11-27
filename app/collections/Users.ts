import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<a href= ${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>VerifyAccount</a>`;
        // PrimaryActionEmailHtml({
        // actionLabel: 'verify your account',
        // buttonText: 'Verify Account',

        // });
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      defaultValue: 'user',
      required: true,
      access: {
        read: () => true,
        create: () => true,
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
