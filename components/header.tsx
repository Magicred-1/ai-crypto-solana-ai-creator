"use client"

import { MenuDrawer } from './menu-drawer'
import { HowItWorksDialog } from './how-it-works-dialog'
import { BuyCryptoDialog } from './buy-crypto-dialog'
import { WalletDialog } from './wallet-dialog'
import { ThemeToggle } from './theme-toggle'
import { MobileMenu } from './mobile-menu'
import { CreateAgentDialog } from './create-agent-dialog'
import { ChatDrawer } from './chat-drawer'

interface HeaderProps {
  readonly isRightDrawerOpen: boolean;
  readonly onToggleRightDrawer: () => void;
  
}

export function Header({ isRightDrawerOpen, onToggleRightDrawer }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3 flex items-center justify-between transition-colors duration-300">
      <div className="flex items-center space-x-2">
        <CreateAgentDialog />
      </div>
      
      <div className="hidden md:flex items-center space-x-2">
        <HowItWorksDialog />
        <BuyCryptoDialog />
        <WalletDialog />
        <ThemeToggle />
      </div>

      <MenuDrawer />
      <ChatDrawer isOpen={isRightDrawerOpen} onToggle={onToggleRightDrawer} AgentName={'Adam'} />

      <MobileMenu />
    </header>
  )
}

