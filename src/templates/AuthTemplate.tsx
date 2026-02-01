"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export interface AuthTemplateProps {
    children: React.ReactNode;
    aside?: React.ReactNode;
    showAside?: boolean;
    className?: string;
}

export const AuthTemplate = ({
    children,
    aside,
    showAside = true,
    className,
}: AuthTemplateProps) => {
    return (
        <div className={cn("min-h-screen grid lg:grid-cols-2", className)}>
            {/* Form Side */}
            <div className="flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-6">
                    {children}
                </div>
            </div>

            {/* Aside Side - Hidden on mobile */}
            {showAside && aside && (
                <div className="hidden lg:block relative bg-muted">
                    {aside}
                </div>
            )}
        </div>
    );
};
