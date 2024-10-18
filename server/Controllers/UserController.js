import { Webhook } from "svix";
import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    // Ensure the Clerk Webhook Secret is set
    if (!process.env.CLERK_WEBHOOK_SECRET) {
      throw new Error('CLERK_WEBHOOK_SECRET is not set');
    }

    // Create a Svix instance with Clerk
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the incoming webhook request
    try {
      await whook.verify(JSON.stringify(req.body), {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"],
      });
    } catch (verificationError) {
      console.error('Webhook verification failed:', verificationError);
      return res.status(400).json({ success: false, message: 'Invalid webhook signature' });
    }

    // Extract data and type from the webhook payload
    const { data, type } = req.body;

    // Ensure data.email_addresses exists and has at least one email
    const email = data.email_addresses && data.email_addresses.length > 0 
                  ? data.email_addresses[0].email_address 
                  : null;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Invalid email address data' });
    }

    // Handle different webhook event types
    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: email,  // Used the variable with email check
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.create(userData);
        return res.status(201).json({ success: true, message: "User created" });
      }
      case "user.updated": {
        const userData = {
          email: email,  // Used the variable with email check
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        return res.status(200).json({ success: true, message: "User updated" });
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        return res.status(200).json({ success: true, message: "User deleted" });
      }
      default: {
        return res.status(400).json({ success: false, message: "Unknown event type" });
      }
    }
  } catch (error) {
    console.log({ success: false, message: error.message }); // Fixed typo

    // Return an error response with status 500
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { clerkWebhooks };
