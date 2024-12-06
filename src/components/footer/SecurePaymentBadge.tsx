import React from 'react';
import { Lock } from 'lucide-react';

export const SecurePaymentBadge = () => (
  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 inline-flex items-center backdrop-blur-lg">
    <Lock className="w-5 h-5 text-green-400 mr-2" />
    <span className="text-green-400 font-medium">
      Bezpieczna i szyfrowana płatność
    </span>
  </div>
);