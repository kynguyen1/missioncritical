import * as React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="bg-MISSIONblack text-white text-sm p-4 md:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section - Copyright */}
      <div className="opacity-75">&copy; 2025 MissionCritical Group. All rights reserved.</div>
      <div className="flex space-x-4 mt-2 md:mt-0">Mission Critical</div>
      {/* Links */}
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
      </div>

    </div>
  )
}

export default Footer
