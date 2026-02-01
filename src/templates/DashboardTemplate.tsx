"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export interface DashboardTemplateProps {
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    content?: React.ReactNode;
    className?: string;
}

export const DashboardTemplate = ({
    sidebar,
    header,
    content,
    className,
}: DashboardTemplateProps) => {
    return (
        <div className={cn("flex h-screen bg-background", className)}>
            {/* Sidebar */}
            {sidebar && (
                <aside className="w-64 border-r bg-muted/40">
                    {sidebar}
                </aside>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                {header && (
                    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        {header}
                    </header>
                )}

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {content}
                </main>
            </div>
        </div>
    );
};
