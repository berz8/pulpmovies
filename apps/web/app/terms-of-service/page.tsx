/* eslint-disable react/no-unescaped-entities */
import Logo from "@/components/logo";
import Naming from "@/components/naming";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="px-3 mt-8 mb-24 text-gray-900 dark:text-gray-50 container m-auto">
      <div className="mt-8 flex items-center justify-center gap-4 dark:gap-1">
        <div className="glowing rounded-xl md:rounded-3xl shadow-2xl p-3 dark:p-0 md:p-4 flex items-center justify-center bg-linear-to-br from-[#6400E2] to-[#341C97] dark:bg-none dark:shadow-none">
          <div className="w-10 md:w-16 dark:md:w-20">
            <Logo />
          </div>
        </div>
        <div className="translate-y-1 w-44 md:w-80">
          <Naming />
        </div>
      </div>
      <h1 className="text-3xl text-center font-bold my-8">
        Website Terms and Conditions of Use
      </h1>
      <h2 className="text-xl font-semibold ">1. Terms</h2>
      <p className="mt-2 mb-4">
        By accessing this Website, accessible from https://pulpmovies.app, you
        are agreeing to be bound by these Website Terms and Conditions of Use
        and agree that you are responsible for the agreement with any applicable
        local laws. If you disagree with any of these terms, you are prohibited
        from accessing this site. The materials contained in this Website are
        protected by copyright and trade mark law.
      </p>
      <h2 className="text-xl font-semibold ">2. Use License</h2>
      <p className="mt-2 mb-4">
        Permission is granted to temporarily download one copy of the materials
        on Pulp Movies's Website for personal, non-commercial transitory viewing
        only. This is the grant of a license, not a transfer of title, and under
        this license you may not:
      </p>
      <ul className="list-disc my-2 pl-4">
        <li>modify or copy the materials;</li>
        <li>
          use the materials for any commercial purpose or for any public
          display;
        </li>
        <li>
          attempt to reverse engineer any software contained on Pulp Movies's
          Website;
        </li>
        <li>
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li>
          transferring the materials to another person or "mirror" the materials
          on any other server.
        </li>
      </ul>
      <p className="mt-2 mb-4">
        This will let Pulp Movies to terminate upon violations of any of these
        restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format. These Terms of
        Service has been created with the help of the{" "}
        <a href="https://www.termsofservicegenerator.net">
          Terms Of Service Generator
        </a>
        .
      </p>
      <h2 className="text-xl font-semibold ">3. Disclaimer</h2>
      <p className="mt-2 mb-4">
        All the materials on Pulp Movies's Website are provided "as is". Pulp
        Movies makes no warranties, may it be expressed or implied, therefore
        negates all other warranties. Furthermore, Pulp Movies does not make any
        representations concerning the accuracy or reliability of the use of the
        materials on its Website or otherwise relating to such materials or any
        sites linked to this Website.
      </p>
      <h2 className="text-xl font-semibold ">4. Limitations</h2>
      <p className="mt-2 mb-4">
        Pulp Movies or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on Pulp Movies's Website, even if Pulp Movies or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </p>
      <h2 className="text-xl font-semibold ">5. Revisions and Errata</h2>
      <p className="mt-2 mb-4">
        The materials appearing on Pulp Movies's Website may include technical,
        typographical, or photographic errors. Pulp Movies will not promise that
        any of the materials in this Website are accurate, complete, or current.
        Pulp Movies may change the materials contained on its Website at any
        time without notice. Pulp Movies does not make any commitment to update
        the materials.
      </p>
      <h2 className="text-xl font-semibold ">6. Links</h2>
      <p className="mt-2 mb-4">
        Pulp Movies has not reviewed all of the sites linked to its Website and
        is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by Pulp Movies of the
        site. The use of any linked website is at the user's own risk.
      </p>
      <h2 className="text-xl font-semibold ">
        7. Site Terms of Use Modifications
      </h2>
      <p className="mt-2 mb-4">
        Pulp Movies may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>
      <h2 className="text-xl font-semibold ">8. Your Privacy</h2>
      <p className="mt-2 mb-4">
        Please read our{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
      <h2 className="text-xl font-semibold ">9. Governing Law</h2>
      <p className="mt-2 mb-4">
        Any claim related to Pulp Movies's Website shall be governed by the laws
        of it without regards to its conflict of law provisions.
      </p>
    </div>
  );
}
