import React from 'react';
import { Button } from './ui/Button';
import { useRegistrationModal } from '../hooks/useRegistrationModal';

interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType;
  rightIcon?: React.ComponentType;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  children,
  className = '',
  icon,
  rightIcon
}) => {
  const { open } = useRegistrationModal();

  return (
    <Button
      onClick={open}
      className={className}
      icon={icon}
      rightIcon={rightIcon}
      data-checkout-trigger
    >
      {children}
    </Button>
  );
};