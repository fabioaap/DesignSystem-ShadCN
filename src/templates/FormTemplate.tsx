"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

export interface FormTemplateProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    children: React.ReactNode;
    actions?: React.ReactNode;
    aside?: React.ReactNode;
    variant?: 'card' | 'plain';
    className?: string;
}

export const FormTemplate = ({
    title,
    description,
    children,
    actions,
    aside,
    variant = 'card',
    className,
}: FormTemplateProps) => {
    const content = (
        <div className="space-y-6">
            {(title || description) && (
                <div className="space-y-2">
                    {title && (
                        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    )}
                    {description && (
                        <p className="text-muted-foreground">{description}</p>
                    )}
                </div>
            )}

            <div className="space-y-4">
                {children}
            </div>

            {actions && (
                <div className="flex gap-4 justify-end pt-4 border-t">
                    {actions}
                </div>
            )}
        </div>
    );

    return (
        <div className={cn("container max-w-6xl py-10", className)}>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    {variant === 'card' ? (
                        <Card className="p-6">{content}</Card>
                    ) : (
                        content
                    )}
                </div>

                {aside && (
                    <div className="lg:col-span-1">
                        <Card className="p-6 sticky top-6">
                            {aside}
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};
