// updated 23.12.2021
export const publicSuffixList = [
  // This Source Code Form is subject to the terms of the Mozilla Public
  // License, v. 2.0. If a copy of the MPL was not distributed with this
  // file, You can obtain one at https://mozilla.org/MPL/2.0/.

  // Please pull this list from, and only from https://publicsuffix.org/list/public_suffix_list.dat,
  // rather than any other VCS sites. Pulling from any other URL is not guaranteed to be supported.

  // Instructions on pulling and using this list can be found at https://publicsuffix.org/list/.

  // ===BEGIN ICANN DOMAINS===

  // ac : https://en.wikipedia.org/wiki/.ac

  'com.ac',
  'edu.ac',
  'gov.ac',
  'net.ac',
  'mil.ac',
  'org.ac',

  // ad : https://en.wikipedia.org/wiki/.ad

  'nom.ad',

  // ae : https://en.wikipedia.org/wiki/.ae
  // see also: "Domain Name Eligibility Policy" at http://www.aeda.ae/eng/aepolicy.php

  'co.ae',
  'net.ae',
  'org.ae',
  'sch.ae',
  'ac.ae',
  'gov.ae',
  'mil.ae',

  // aero : see https://www.information.aero/index.php?id=66

  'accident-investigation.aero',
  'accident-prevention.aero',
  'aerobatic.aero',
  'aeroclub.aero',
  'aerodrome.aero',
  'agents.aero',
  'aircraft.aero',
  'airline.aero',
  'airport.aero',
  'air-surveillance.aero',
  'airtraffic.aero',
  'air-traffic-control.aero',
  'ambulance.aero',
  'amusement.aero',
  'association.aero',
  'author.aero',
  'ballooning.aero',
  'broker.aero',
  'caa.aero',
  'cargo.aero',
  'catering.aero',
  'certification.aero',
  'championship.aero',
  'charter.aero',
  'civilaviation.aero',
  'club.aero',
  'conference.aero',
  'consultant.aero',
  'consulting.aero',
  'control.aero',
  'council.aero',
  'crew.aero',
  'design.aero',
  'dgca.aero',
  'educator.aero',
  'emergency.aero',
  'engine.aero',
  'engineer.aero',
  'entertainment.aero',
  'equipment.aero',
  'exchange.aero',
  'express.aero',
  'federation.aero',
  'flight.aero',
  'fuel.aero',
  'gliding.aero',
  'government.aero',
  'groundhandling.aero',
  'group.aero',
  'hanggliding.aero',
  'homebuilt.aero',
  'insurance.aero',
  'journal.aero',
  'journalist.aero',
  'leasing.aero',
  'logistics.aero',
  'magazine.aero',
  'maintenance.aero',
  'media.aero',
  'microlight.aero',
  'modelling.aero',
  'navigation.aero',
  'parachuting.aero',
  'paragliding.aero',
  'passenger-association.aero',
  'pilot.aero',
  'press.aero',
  'production.aero',
  'recreation.aero',
  'repbody.aero',
  'res.aero',
  'research.aero',
  'rotorcraft.aero',
  'safety.aero',
  'scientist.aero',
  'services.aero',
  'show.aero',
  'skydiving.aero',
  'software.aero',
  'student.aero',
  'trader.aero',
  'trading.aero',
  'trainer.aero',
  'union.aero',
  'workinggroup.aero',
  'works.aero',

  // af : http://www.nic.af/help.jsp

  'gov.af',
  'com.af',
  'org.af',
  'net.af',
  'edu.af',

  // ag : http://www.nic.ag/prices.htm

  'com.ag',
  'org.ag',
  'net.ag',
  'co.ag',
  'nom.ag',

  // ai : http://nic.com.ai/

  'off.ai',
  'com.ai',
  'net.ai',
  'org.ai',

  // al : http://www.ert.gov.al/ert_alb/faq_det.html?Id=31

  'com.al',
  'edu.al',
  'gov.al',
  'mil.al',
  'net.al',
  'org.al',

  // am : https://www.amnic.net/policy/en/Policy_EN.pdf

  'co.am',
  'com.am',
  'commune.am',
  'net.am',
  'org.am',

  // ao : https://en.wikipedia.org/wiki/.ao
  // http://www.dns.ao/REGISTR.DOC

  'ed.ao',
  'gv.ao',
  'og.ao',
  'co.ao',
  'pb.ao',
  'it.ao',

  // aq : https://en.wikipedia.org/wiki/.aq

  // ar : https://nic.ar/es/nic-argentina/normativa

  'bet.ar',
  'com.ar',
  'coop.ar',
  'edu.ar',
  'gob.ar',
  'gov.ar',
  'int.ar',
  'mil.ar',
  'musica.ar',
  'mutual.ar',
  'net.ar',
  'org.ar',
  'senasa.ar',
  'tur.ar',

  // arpa : https://en.wikipedia.org/wiki/.arpa
  // Confirmed by registry <iana-questions@icann.org> 2008-06-18

  'e164.arpa',
  'in-addr.arpa',
  'ip6.arpa',
  'iris.arpa',
  'uri.arpa',
  'urn.arpa',

  // as : https://en.wikipedia.org/wiki/.as

  'gov.as',

  // asia : https://en.wikipedia.org/wiki/.asia

  // at : https://en.wikipedia.org/wiki/.at
  // Confirmed by registry <it@nic.at> 2008-06-17

  'ac.at',
  'co.at',
  'gv.at',
  'or.at',
  'sth.ac.at',

  // au : https://en.wikipedia.org/wiki/.au
  // http://www.auda.org.au/

  // 2LDs
  'com.au',
  'net.au',
  'org.au',
  'edu.au',
  'gov.au',
  'asn.au',
  'id.au',
  // Historic 2LDs (closed to new registration, but sites still exist)
  'info.au',
  'conf.au',
  'oz.au',
  // CGDNs - http://www.cgdn.org.au/
  'act.au',
  'nsw.au',
  'nt.au',
  'qld.au',
  'sa.au',
  'tas.au',
  'vic.au',
  'wa.au',
  // 3LDs
  'act.edu.au',
  'catholic.edu.au',
  // eq.edu.au - Removed at the request of the Queensland Department of Education
  'nsw.edu.au',
  'nt.edu.au',
  'qld.edu.au',
  'sa.edu.au',
  'tas.edu.au',
  'vic.edu.au',
  'wa.edu.au',
  // act.gov.au  Bug 984824 - Removed at request of Greg Tankard
  // nsw.gov.au  Bug 547985 - Removed at request of <Shae.Donelan@services.nsw.gov.au>
  // nt.gov.au  Bug 940478 - Removed at request of Greg Connors <Greg.Connors@nt.gov.au>
  'qld.gov.au',
  'sa.gov.au',
  'tas.gov.au',
  'vic.gov.au',
  'wa.gov.au',
  // 4LDs
  // education.tas.edu.au - Removed at the request of the Department of Education Tasmania
  'schools.nsw.edu.au',

  // aw : https://en.wikipedia.org/wiki/.aw

  'com.aw',

  // ax : https://en.wikipedia.org/wiki/.ax

  // az : https://en.wikipedia.org/wiki/.az

  'com.az',
  'net.az',
  'int.az',
  'gov.az',
  'org.az',
  'edu.az',
  'info.az',
  'pp.az',
  'mil.az',
  'name.az',
  'pro.az',
  'biz.az',

  // ba : http://nic.ba/users_data/files/pravilnik_o_registraciji.pdf

  'com.ba',
  'edu.ba',
  'gov.ba',
  'mil.ba',
  'net.ba',
  'org.ba',

  // bb : https://en.wikipedia.org/wiki/.bb

  'biz.bb',
  'co.bb',
  'com.bb',
  'edu.bb',
  'gov.bb',
  'info.bb',
  'net.bb',
  'org.bb',
  'store.bb',
  'tv.bb',

  // bd : https://en.wikipedia.org/wiki/.bd
  'bd',

  // be : https://en.wikipedia.org/wiki/.be
  // Confirmed by registry <tech@dns.be> 2008-06-08

  'ac.be',

  // bf : https://en.wikipedia.org/wiki/.bf

  'gov.bf',

  // bg : https://en.wikipedia.org/wiki/.bg
  // https://www.register.bg/user/static/rules/en/index.html

  'a.bg',
  'b.bg',
  'c.bg',
  'd.bg',
  'e.bg',
  'f.bg',
  'g.bg',
  'h.bg',
  'i.bg',
  'j.bg',
  'k.bg',
  'l.bg',
  'm.bg',
  'n.bg',
  'o.bg',
  'p.bg',
  'q.bg',
  'r.bg',
  's.bg',
  't.bg',
  'u.bg',
  'v.bg',
  'w.bg',
  'x.bg',
  'y.bg',
  'z.bg',
  '0.bg',
  '1.bg',
  '2.bg',
  '3.bg',
  '4.bg',
  '5.bg',
  '6.bg',
  '7.bg',
  '8.bg',
  '9.bg',

  // bh : https://en.wikipedia.org/wiki/.bh

  'com.bh',
  'edu.bh',
  'net.bh',
  'org.bh',
  'gov.bh',

  // bi : https://en.wikipedia.org/wiki/.bi
  // http://whois.nic.bi/

  'co.bi',
  'com.bi',
  'edu.bi',
  'or.bi',
  'org.bi',

  // biz : https://en.wikipedia.org/wiki/.biz

  // bj : https://en.wikipedia.org/wiki/.bj

  'asso.bj',
  'barreau.bj',
  'gouv.bj',

  // bm : http://www.bermudanic.bm/dnr-text.txt

  'com.bm',
  'edu.bm',
  'gov.bm',
  'net.bm',
  'org.bm',

  // bn : http://www.bnnic.bn/faqs

  'com.bn',
  'edu.bn',
  'gov.bn',
  'net.bn',
  'org.bn',

  // bo : https://nic.bo/delegacion2015.php#h-1.10

  'com.bo',
  'edu.bo',
  'gob.bo',
  'int.bo',
  'org.bo',
  'net.bo',
  'mil.bo',
  'tv.bo',
  'web.bo',
  // Social Domains
  'academia.bo',
  'agro.bo',
  'arte.bo',
  'blog.bo',
  'bolivia.bo',
  'ciencia.bo',
  'cooperativa.bo',
  'democracia.bo',
  'deporte.bo',
  'ecologia.bo',
  'economia.bo',
  'empresa.bo',
  'indigena.bo',
  'industria.bo',
  'info.bo',
  'medicina.bo',
  'movimiento.bo',
  'musica.bo',
  'natural.bo',
  'nombre.bo',
  'noticias.bo',
  'patria.bo',
  'politica.bo',
  'profesional.bo',
  'plurinacional.bo',
  'pueblo.bo',
  'revista.bo',
  'salud.bo',
  'tecnologia.bo',
  'tksat.bo',
  'transporte.bo',
  'wiki.bo',

  // br : http://registro.br/dominio/categoria.html
  // Submitted by registry <fneves@registro.br>

  '9guacu.br',
  'abc.br',
  'adm.br',
  'adv.br',
  'agr.br',
  'aju.br',
  'am.br',
  'anani.br',
  'aparecida.br',
  'app.br',
  'arq.br',
  'art.br',
  'ato.br',
  'b.br',
  'barueri.br',
  'belem.br',
  'bhz.br',
  'bib.br',
  'bio.br',
  'blog.br',
  'bmd.br',
  'boavista.br',
  'bsb.br',
  'campinagrande.br',
  'campinas.br',
  'caxias.br',
  'cim.br',
  'cng.br',
  'cnt.br',
  'com.br',
  'contagem.br',
  'coop.br',
  'coz.br',
  'cri.br',
  'cuiaba.br',
  'curitiba.br',
  'def.br',
  'des.br',
  'det.br',
  'dev.br',
  'ecn.br',
  'eco.br',
  'edu.br',
  'emp.br',
  'enf.br',
  'eng.br',
  'esp.br',
  'etc.br',
  'eti.br',
  'far.br',
  'feira.br',
  'flog.br',
  'floripa.br',
  'fm.br',
  'fnd.br',
  'fortal.br',
  'fot.br',
  'foz.br',
  'fst.br',
  'g12.br',
  'geo.br',
  'ggf.br',
  'goiania.br',
  'gov.br',
  // gov.br 26 states + df https://en.wikipedia.org/wiki/States_of_Brazil
  'ac.gov.br',
  'al.gov.br',
  'am.gov.br',
  'ap.gov.br',
  'ba.gov.br',
  'ce.gov.br',
  'df.gov.br',
  'es.gov.br',
  'go.gov.br',
  'ma.gov.br',
  'mg.gov.br',
  'ms.gov.br',
  'mt.gov.br',
  'pa.gov.br',
  'pb.gov.br',
  'pe.gov.br',
  'pi.gov.br',
  'pr.gov.br',
  'rj.gov.br',
  'rn.gov.br',
  'ro.gov.br',
  'rr.gov.br',
  'rs.gov.br',
  'sc.gov.br',
  'se.gov.br',
  'sp.gov.br',
  'to.gov.br',
  'gru.br',
  'imb.br',
  'ind.br',
  'inf.br',
  'jab.br',
  'jampa.br',
  'jdf.br',
  'joinville.br',
  'jor.br',
  'jus.br',
  'leg.br',
  'lel.br',
  'log.br',
  'londrina.br',
  'macapa.br',
  'maceio.br',
  'manaus.br',
  'maringa.br',
  'mat.br',
  'med.br',
  'mil.br',
  'morena.br',
  'mp.br',
  'mus.br',
  'natal.br',
  'net.br',
  'niteroi.br',
  'nom.br',
  'not.br',
  'ntr.br',
  'odo.br',
  'ong.br',
  'org.br',
  'osasco.br',
  'palmas.br',
  'poa.br',
  'ppg.br',
  'pro.br',
  'psc.br',
  'psi.br',
  'pvh.br',
  'qsl.br',
  'radio.br',
  'rec.br',
  'recife.br',
  'rep.br',
  'ribeirao.br',
  'rio.br',
  'riobranco.br',
  'riopreto.br',
  'salvador.br',
  'sampa.br',
  'santamaria.br',
  'santoandre.br',
  'saobernardo.br',
  'saogonca.br',
  'seg.br',
  'sjc.br',
  'slg.br',
  'slz.br',
  'sorocaba.br',
  'srv.br',
  'taxi.br',
  'tc.br',
  'tec.br',
  'teo.br',
  'the.br',
  'tmp.br',
  'trd.br',
  'tur.br',
  'tv.br',
  'udi.br',
  'vet.br',
  'vix.br',
  'vlog.br',
  'wiki.br',
  'zlg.br',

  // bs : http://www.nic.bs/rules.html

  'com.bs',
  'net.bs',
  'org.bs',
  'edu.bs',
  'gov.bs',

  // bt : https://en.wikipedia.org/wiki/.bt

  'com.bt',
  'edu.bt',
  'gov.bt',
  'net.bt',
  'org.bt',

  // bv : No registrations at this time.
  // Submitted by registry <jarle@uninett.no>

  // bw : https://en.wikipedia.org/wiki/.bw
  // http://www.gobin.info/domainname/bw.doc
  // list of other 2nd level tlds ?

  'co.bw',
  'org.bw',

  // by : https://en.wikipedia.org/wiki/.by
  // http://tld.by/rules_2006_en.html
  // list of other 2nd level tlds ?

  'gov.by',
  'mil.by',
  // Official information does not indicate that com.by is a reserved
  // second-level domain, but it's being used as one (see www.google.com.by and
  // www.yahoo.com.by, for example), so we list it here for safety's sake.
  'com.by',

  // http://hoster.by/
  'of.by',

  // bz : https://en.wikipedia.org/wiki/.bz
  // http://www.belizenic.bz/

  'com.bz',
  'net.bz',
  'org.bz',
  'edu.bz',
  'gov.bz',

  // ca : https://en.wikipedia.org/wiki/.ca

  // ca geographical names
  'ab.ca',
  'bc.ca',
  'mb.ca',
  'nb.ca',
  'nf.ca',
  'nl.ca',
  'ns.ca',
  'nt.ca',
  'nu.ca',
  'on.ca',
  'pe.ca',
  'qc.ca',
  'sk.ca',
  'yk.ca',
  // gc.ca: https://en.wikipedia.org/wiki/.gc.ca
  // see also: http://registry.gc.ca/en/SubdomainFAQ
  'gc.ca',

  // cat : https://en.wikipedia.org/wiki/.cat

  // cc : https://en.wikipedia.org/wiki/.cc

  // cd : https://en.wikipedia.org/wiki/.cd
  // see also: https://www.nic.cd/domain/insertDomain_2.jsp?act=1

  'gov.cd',

  // cf : https://en.wikipedia.org/wiki/.cf

  // cg : https://en.wikipedia.org/wiki/.cg

  // ch : https://en.wikipedia.org/wiki/.ch

  // ci : https://en.wikipedia.org/wiki/.ci
  // http://www.nic.ci/index.php?page=charte

  'org.ci',
  'or.ci',
  'com.ci',
  'co.ci',
  'edu.ci',
  'ed.ci',
  'ac.ci',
  'net.ci',
  'go.ci',
  'asso.ci',
  'aéroport.ci',
  'int.ci',
  'presse.ci',
  'md.ci',
  'gouv.ci',

  // ck : https://en.wikipedia.org/wiki/.ck
  'ck',
  // !www.ck

  // cl : https://www.nic.cl
  // Confirmed by .CL registry <hsalgado@nic.cl>

  'co.cl',
  'gob.cl',
  'gov.cl',
  'mil.cl',

  // cm : https://en.wikipedia.org/wiki/.cm plus bug 981927

  'co.cm',
  'com.cm',
  'gov.cm',
  'net.cm',

  // cn : https://en.wikipedia.org/wiki/.cn
  // Submitted by registry <tanyaling@cnnic.cn>

  'ac.cn',
  'com.cn',
  'edu.cn',
  'gov.cn',
  'net.cn',
  'org.cn',
  'mil.cn',
  '公司.cn',
  '网络.cn',
  '網絡.cn',
  // cn geographic names
  'ah.cn',
  'bj.cn',
  'cq.cn',
  'fj.cn',
  'gd.cn',
  'gs.cn',
  'gz.cn',
  'gx.cn',
  'ha.cn',
  'hb.cn',
  'he.cn',
  'hi.cn',
  'hl.cn',
  'hn.cn',
  'jl.cn',
  'js.cn',
  'jx.cn',
  'ln.cn',
  'nm.cn',
  'nx.cn',
  'qh.cn',
  'sc.cn',
  'sd.cn',
  'sh.cn',
  'sn.cn',
  'sx.cn',
  'tj.cn',
  'xj.cn',
  'xz.cn',
  'yn.cn',
  'zj.cn',
  'hk.cn',
  'mo.cn',
  'tw.cn',

  // co : https://en.wikipedia.org/wiki/.co
  // Submitted by registry <tecnico@uniandes.edu.co>

  'arts.co',
  'com.co',
  'edu.co',
  'firm.co',
  'gov.co',
  'info.co',
  'int.co',
  'mil.co',
  'net.co',
  'nom.co',
  'org.co',
  'rec.co',
  'web.co',

  // com : https://en.wikipedia.org/wiki/.com

  // coop : https://en.wikipedia.org/wiki/.coop

  // cr : http://www.nic.cr/niccr_publico/showRegistroDominiosScreen.do

  'ac.cr',
  'co.cr',
  'ed.cr',
  'fi.cr',
  'go.cr',
  'or.cr',
  'sa.cr',

  // cu : https://en.wikipedia.org/wiki/.cu

  'com.cu',
  'edu.cu',
  'org.cu',
  'net.cu',
  'gov.cu',
  'inf.cu',

  // cv : https://en.wikipedia.org/wiki/.cv
  // cv : http://www.dns.cv/tldcv_portal/do?com=DS;5446457100;111;+PAGE(4000018)+K-CAT-CODIGO(RDOM)+RCNT(100); <- registration rules

  'com.cv',
  'edu.cv',
  'int.cv',
  'nome.cv',
  'org.cv',

  // cw : http://www.una.cw/cw_registry/
  // Confirmed by registry <registry@una.net> 2013-03-26

  'com.cw',
  'edu.cw',
  'net.cw',
  'org.cw',

  // cx : https://en.wikipedia.org/wiki/.cx
  // list of other 2nd level tlds ?

  'gov.cx',

  // cy : http://www.nic.cy/
  // Submitted by registry Panayiotou Fotia <cydns@ucy.ac.cy>

  'ac.cy',
  'biz.cy',
  'com.cy',
  'ekloges.cy',
  'gov.cy',
  'ltd.cy',
  'name.cy',
  'net.cy',
  'org.cy',
  'parliament.cy',
  'press.cy',
  'pro.cy',
  'tm.cy',

  // cz : https://en.wikipedia.org/wiki/.cz

  // de : https://en.wikipedia.org/wiki/.de
  // Confirmed by registry <ops@denic.de> (with technical
  // reservations) 2008-07-01

  // dj : https://en.wikipedia.org/wiki/.dj

  // dk : https://en.wikipedia.org/wiki/.dk
  // Confirmed by registry <robert@dk-hostmaster.dk> 2008-06-17

  // dm : https://en.wikipedia.org/wiki/.dm

  'com.dm',
  'net.dm',
  'org.dm',
  'edu.dm',
  'gov.dm',

  // do : https://en.wikipedia.org/wiki/.do

  'art.do',
  'com.do',
  'edu.do',
  'gob.do',
  'gov.do',
  'mil.do',
  'net.do',
  'org.do',
  'sld.do',
  'web.do',

  // dz : http://www.nic.dz/images/pdf_nic/charte.pdf

  'art.dz',
  'asso.dz',
  'com.dz',
  'edu.dz',
  'gov.dz',
  'org.dz',
  'net.dz',
  'pol.dz',
  'soc.dz',
  'tm.dz',

  // ec : http://www.nic.ec/reg/paso1.asp
  // Submitted by registry <vabboud@nic.ec>

  'com.ec',
  'info.ec',
  'net.ec',
  'fin.ec',
  'k12.ec',
  'med.ec',
  'pro.ec',
  'org.ec',
  'edu.ec',
  'gov.ec',
  'gob.ec',
  'mil.ec',

  // edu : https://en.wikipedia.org/wiki/.edu

  // ee : http://www.eenet.ee/EENet/dom_reeglid.html#lisa_B

  'edu.ee',
  'gov.ee',
  'riik.ee',
  'lib.ee',
  'med.ee',
  'com.ee',
  'pri.ee',
  'aip.ee',
  'org.ee',
  'fie.ee',

  // eg : https://en.wikipedia.org/wiki/.eg

  'com.eg',
  'edu.eg',
  'eun.eg',
  'gov.eg',
  'mil.eg',
  'name.eg',
  'net.eg',
  'org.eg',
  'sci.eg',

  // er : https://en.wikipedia.org/wiki/.er
  'er',

  // es : https://www.nic.es/site_ingles/ingles/dominios/index.html

  'com.es',
  'nom.es',
  'org.es',
  'gob.es',
  'edu.es',

  // et : https://en.wikipedia.org/wiki/.et

  'com.et',
  'gov.et',
  'org.et',
  'edu.et',
  'biz.et',
  'name.et',
  'info.et',
  'net.et',

  // eu : https://en.wikipedia.org/wiki/.eu

  // fi : https://en.wikipedia.org/wiki/.fi

  // aland.fi : https://en.wikipedia.org/wiki/.ax
  // This domain is being phased out in favor of .ax. As there are still many
  // domains under aland.fi, we still keep it on the list until aland.fi is
  // completely removed.
  // TODO: Check for updates (expected to be phased out around Q1/2009)
  'aland.fi',

  // fj : http://domains.fj/
  // Submitted by registry <garth.miller@cocca.org.nz> 2020-02-11

  'ac.fj',
  'biz.fj',
  'com.fj',
  'gov.fj',
  'info.fj',
  'mil.fj',
  'name.fj',
  'net.fj',
  'org.fj',
  'pro.fj',

  // fk : https://en.wikipedia.org/wiki/.fk
  'fk',

  // fm : https://en.wikipedia.org/wiki/.fm
  'com.fm',
  'edu.fm',
  'net.fm',
  'org.fm',

  // fo : https://en.wikipedia.org/wiki/.fo

  // fr : http://www.afnic.fr/
  // domaines descriptifs : https://www.afnic.fr/medias/documents/Cadre_legal/Afnic_Naming_Policy_12122016_VEN.pdf

  'asso.fr',
  'com.fr',
  'gouv.fr',
  'nom.fr',
  'prd.fr',
  'tm.fr',
  // domaines sectoriels : https://www.afnic.fr/en/products-and-services/the-fr-tld/sector-based-fr-domains-4.html
  'aeroport.fr',
  'avocat.fr',
  'avoues.fr',
  'cci.fr',
  'chambagri.fr',
  'chirurgiens-dentistes.fr',
  'experts-comptables.fr',
  'geometre-expert.fr',
  'greta.fr',
  'huissier-justice.fr',
  'medecin.fr',
  'notaires.fr',
  'pharmacien.fr',
  'port.fr',
  'veterinaire.fr',

  // ga : https://en.wikipedia.org/wiki/.ga

  // gb : This registry is effectively dormant
  // Submitted by registry <Damien.Shaw@ja.net>

  // gd : https://en.wikipedia.org/wiki/.gd
  'edu.gd',
  'gov.gd',

  // ge : http://www.nic.net.ge/policy_en.pdf

  'com.ge',
  'edu.ge',
  'gov.ge',
  'org.ge',
  'mil.ge',
  'net.ge',
  'pvt.ge',

  // gf : https://en.wikipedia.org/wiki/.gf

  // gg : http://www.channelisles.net/register-domains/
  // Confirmed by registry <nigel@channelisles.net> 2013-11-28

  'co.gg',
  'net.gg',
  'org.gg',

  // gh : https://en.wikipedia.org/wiki/.gh
  // see also: http://www.nic.gh/reg_now.php
  // Although domains directly at second level are not possible at the moment,
  // they have been possible for some time and may come back.

  'com.gh',
  'edu.gh',
  'gov.gh',
  'org.gh',
  'mil.gh',

  // gi : http://www.nic.gi/rules.html

  'com.gi',
  'ltd.gi',
  'gov.gi',
  'mod.gi',
  'edu.gi',
  'org.gi',

  // gl : https://en.wikipedia.org/wiki/.gl
  // http://nic.gl

  'co.gl',
  'com.gl',
  'edu.gl',
  'net.gl',
  'org.gl',

  // gm : http://www.nic.gm/htmlpages%5Cgm-policy.htm

  // gn : http://psg.com/dns/gn/gn.txt
  // Submitted by registry <randy@psg.com>

  'ac.gn',
  'com.gn',
  'edu.gn',
  'gov.gn',
  'org.gn',
  'net.gn',

  // gov : https://en.wikipedia.org/wiki/.gov

  // gp : http://www.nic.gp/index.php?lang=en

  'com.gp',
  'net.gp',
  'mobi.gp',
  'edu.gp',
  'org.gp',
  'asso.gp',

  // gq : https://en.wikipedia.org/wiki/.gq

  // gr : https://grweb.ics.forth.gr/english/1617-B-2005.html
  // Submitted by registry <segred@ics.forth.gr>

  'com.gr',
  'edu.gr',
  'net.gr',
  'org.gr',
  'gov.gr',

  // gs : https://en.wikipedia.org/wiki/.gs

  // gt : https://www.gt/sitio/registration_policy.php?lang=en

  'com.gt',
  'edu.gt',
  'gob.gt',
  'ind.gt',
  'mil.gt',
  'net.gt',
  'org.gt',

  // gu : http://gadao.gov.gu/register.html
  // University of Guam : https://www.uog.edu
  // Submitted by uognoc@triton.uog.edu

  'com.gu',
  'edu.gu',
  'gov.gu',
  'guam.gu',
  'info.gu',
  'net.gu',
  'org.gu',
  'web.gu',

  // gw : https://en.wikipedia.org/wiki/.gw
  // gw : https://nic.gw/regras/

  // gy : https://en.wikipedia.org/wiki/.gy
  // http://registry.gy/

  'co.gy',
  'com.gy',
  'edu.gy',
  'gov.gy',
  'net.gy',
  'org.gy',

  // hk : https://www.hkirc.hk
  // Submitted by registry <hk.tech@hkirc.hk>

  'com.hk',
  'edu.hk',
  'gov.hk',
  'idv.hk',
  'net.hk',
  'org.hk',
  '公司.hk',
  '教育.hk',
  '敎育.hk',
  '政府.hk',
  '個人.hk',
  '个人.hk',
  '箇人.hk',
  '網络.hk',
  '网络.hk',
  '组織.hk',
  '網絡.hk',
  '网絡.hk',
  '组织.hk',
  '組織.hk',
  '組织.hk',

  // hm : https://en.wikipedia.org/wiki/.hm

  // hn : http://www.nic.hn/politicas/ps02,,05.html

  'com.hn',
  'edu.hn',
  'org.hn',
  'net.hn',
  'mil.hn',
  'gob.hn',

  // hr : http://www.dns.hr/documents/pdf/HRTLD-regulations.pdf

  'iz.hr',
  'from.hr',
  'name.hr',
  'com.hr',

  // ht : http://www.nic.ht/info/charte.cfm

  'com.ht',
  'shop.ht',
  'firm.ht',
  'info.ht',
  'adult.ht',
  'net.ht',
  'pro.ht',
  'org.ht',
  'med.ht',
  'art.ht',
  'coop.ht',
  'pol.ht',
  'asso.ht',
  'edu.ht',
  'rel.ht',
  'gouv.ht',
  'perso.ht',

  // hu : http://www.domain.hu/domain/English/sld.html
  // Confirmed by registry <pasztor@iszt.hu> 2008-06-12

  'co.hu',
  'info.hu',
  'org.hu',
  'priv.hu',
  'sport.hu',
  'tm.hu',
  '2000.hu',
  'agrar.hu',
  'bolt.hu',
  'casino.hu',
  'city.hu',
  'erotica.hu',
  'erotika.hu',
  'film.hu',
  'forum.hu',
  'games.hu',
  'hotel.hu',
  'ingatlan.hu',
  'jogasz.hu',
  'konyvelo.hu',
  'lakas.hu',
  'media.hu',
  'news.hu',
  'reklam.hu',
  'sex.hu',
  'shop.hu',
  'suli.hu',
  'szex.hu',
  'tozsde.hu',
  'utazas.hu',
  'video.hu',

  // id : https://pandi.id/en/domain/registration-requirements/

  'ac.id',
  'biz.id',
  'co.id',
  'desa.id',
  'go.id',
  'mil.id',
  'my.id',
  'net.id',
  'or.id',
  'ponpes.id',
  'sch.id',
  'web.id',

  // ie : https://en.wikipedia.org/wiki/.ie

  'gov.ie',

  // il : http://www.isoc.org.il/domains/

  'ac.il',
  'co.il',
  'gov.il',
  'idf.il',
  'k12.il',
  'muni.il',
  'net.il',
  'org.il',

  // im : https://www.nic.im/
  // Submitted by registry <info@nic.im>

  'ac.im',
  'co.im',
  'com.im',
  'ltd.co.im',
  'net.im',
  'org.im',
  'plc.co.im',
  'tt.im',
  'tv.im',

  // in : https://en.wikipedia.org/wiki/.in
  // see also: https://registry.in/Policies
  // Please note, that nic.in is not an official eTLD, but used by most
  // government institutions.

  'co.in',
  'firm.in',
  'net.in',
  'org.in',
  'gen.in',
  'ind.in',
  'nic.in',
  'ac.in',
  'edu.in',
  'res.in',
  'gov.in',
  'mil.in',

  // info : https://en.wikipedia.org/wiki/.info

  // int : https://en.wikipedia.org/wiki/.int
  // Confirmed by registry <iana-questions@icann.org> 2008-06-18

  'eu.int',

  // io : http://www.nic.io/rules.html
  // list of other 2nd level tlds ?

  'com.io',

  // iq : http://www.cmc.iq/english/iq/iqregister1.htm

  'gov.iq',
  'edu.iq',
  'mil.iq',
  'com.iq',
  'org.iq',
  'net.iq',

  // ir : http://www.nic.ir/Terms_and_Conditions_ir,_Appendix_1_Domain_Rules
  // Also see http://www.nic.ir/Internationalized_Domain_Names
  // Two <iran>.ir entries added at request of <tech-team@nic.ir>, 2010-04-16

  'ac.ir',
  'co.ir',
  'gov.ir',
  'id.ir',
  'net.ir',
  'org.ir',
  'sch.ir',
  // xn--mgba3a4f16a.ir (<iran>.ir, Persian YEH)
  'ایران.ir',
  // xn--mgba3a4fra.ir (<iran>.ir, Arabic YEH)
  'ايران.ir',

  // is : http://www.isnic.is/domain/rules.php
  // Confirmed by registry <marius@isgate.is> 2008-12-06

  'net.is',
  'com.is',
  'edu.is',
  'gov.is',
  'org.is',
  'int.is',

  // it : https://en.wikipedia.org/wiki/.it

  'gov.it',
  'edu.it',
  // Reserved geo-names (regions and provinces):
  // https://www.nic.it/sites/default/files/archivio/docs/Regulation_assignation_v7.1.pdf
  // Regions
  'abr.it',
  'abruzzo.it',
  'aosta-valley.it',
  'aostavalley.it',
  'bas.it',
  'basilicata.it',
  'cal.it',
  'calabria.it',
  'cam.it',
  'campania.it',
  'emilia-romagna.it',
  'emiliaromagna.it',
  'emr.it',
  'friuli-v-giulia.it',
  'friuli-ve-giulia.it',
  'friuli-vegiulia.it',
  'friuli-venezia-giulia.it',
  'friuli-veneziagiulia.it',
  'friuli-vgiulia.it',
  'friuliv-giulia.it',
  'friulive-giulia.it',
  'friulivegiulia.it',
  'friulivenezia-giulia.it',
  'friuliveneziagiulia.it',
  'friulivgiulia.it',
  'fvg.it',
  'laz.it',
  'lazio.it',
  'lig.it',
  'liguria.it',
  'lom.it',
  'lombardia.it',
  'lombardy.it',
  'lucania.it',
  'mar.it',
  'marche.it',
  'mol.it',
  'molise.it',
  'piedmont.it',
  'piemonte.it',
  'pmn.it',
  'pug.it',
  'puglia.it',
  'sar.it',
  'sardegna.it',
  'sardinia.it',
  'sic.it',
  'sicilia.it',
  'sicily.it',
  'taa.it',
  'tos.it',
  'toscana.it',
  'trentin-sud-tirol.it',
  'trentin-süd-tirol.it',
  'trentin-sudtirol.it',
  'trentin-südtirol.it',
  'trentin-sued-tirol.it',
  'trentin-suedtirol.it',
  'trentino-a-adige.it',
  'trentino-aadige.it',
  'trentino-alto-adige.it',
  'trentino-altoadige.it',
  'trentino-s-tirol.it',
  'trentino-stirol.it',
  'trentino-sud-tirol.it',
  'trentino-süd-tirol.it',
  'trentino-sudtirol.it',
  'trentino-südtirol.it',
  'trentino-sued-tirol.it',
  'trentino-suedtirol.it',
  'trentino.it',
  'trentinoa-adige.it',
  'trentinoaadige.it',
  'trentinoalto-adige.it',
  'trentinoaltoadige.it',
  'trentinos-tirol.it',
  'trentinostirol.it',
  'trentinosud-tirol.it',
  'trentinosüd-tirol.it',
  'trentinosudtirol.it',
  'trentinosüdtirol.it',
  'trentinosued-tirol.it',
  'trentinosuedtirol.it',
  'trentinsud-tirol.it',
  'trentinsüd-tirol.it',
  'trentinsudtirol.it',
  'trentinsüdtirol.it',
  'trentinsued-tirol.it',
  'trentinsuedtirol.it',
  'tuscany.it',
  'umb.it',
  'umbria.it',
  'val-d-aosta.it',
  'val-daosta.it',
  'vald-aosta.it',
  'valdaosta.it',
  'valle-aosta.it',
  'valle-d-aosta.it',
  'valle-daosta.it',
  'valleaosta.it',
  'valled-aosta.it',
  'valledaosta.it',
  'vallee-aoste.it',
  'vallée-aoste.it',
  'vallee-d-aoste.it',
  'vallée-d-aoste.it',
  'valleeaoste.it',
  'valléeaoste.it',
  'valleedaoste.it',
  'valléedaoste.it',
  'vao.it',
  'vda.it',
  'ven.it',
  'veneto.it',
  // Provinces
  'ag.it',
  'agrigento.it',
  'al.it',
  'alessandria.it',
  'alto-adige.it',
  'altoadige.it',
  'an.it',
  'ancona.it',
  'andria-barletta-trani.it',
  'andria-trani-barletta.it',
  'andriabarlettatrani.it',
  'andriatranibarletta.it',
  'ao.it',
  'aosta.it',
  'aoste.it',
  'ap.it',
  'aq.it',
  'aquila.it',
  'ar.it',
  'arezzo.it',
  'ascoli-piceno.it',
  'ascolipiceno.it',
  'asti.it',
  'at.it',
  'av.it',
  'avellino.it',
  'ba.it',
  'balsan-sudtirol.it',
  'balsan-südtirol.it',
  'balsan-suedtirol.it',
  'balsan.it',
  'bari.it',
  'barletta-trani-andria.it',
  'barlettatraniandria.it',
  'belluno.it',
  'benevento.it',
  'bergamo.it',
  'bg.it',
  'bi.it',
  'biella.it',
  'bl.it',
  'bn.it',
  'bo.it',
  'bologna.it',
  'bolzano-altoadige.it',
  'bolzano.it',
  'bozen-sudtirol.it',
  'bozen-südtirol.it',
  'bozen-suedtirol.it',
  'bozen.it',
  'br.it',
  'brescia.it',
  'brindisi.it',
  'bs.it',
  'bt.it',
  'bulsan-sudtirol.it',
  'bulsan-südtirol.it',
  'bulsan-suedtirol.it',
  'bulsan.it',
  'bz.it',
  'ca.it',
  'cagliari.it',
  'caltanissetta.it',
  'campidano-medio.it',
  'campidanomedio.it',
  'campobasso.it',
  'carbonia-iglesias.it',
  'carboniaiglesias.it',
  'carrara-massa.it',
  'carraramassa.it',
  'caserta.it',
  'catania.it',
  'catanzaro.it',
  'cb.it',
  'ce.it',
  'cesena-forli.it',
  'cesena-forlì.it',
  'cesenaforli.it',
  'cesenaforlì.it',
  'ch.it',
  'chieti.it',
  'ci.it',
  'cl.it',
  'cn.it',
  'co.it',
  'como.it',
  'cosenza.it',
  'cr.it',
  'cremona.it',
  'crotone.it',
  'cs.it',
  'ct.it',
  'cuneo.it',
  'cz.it',
  'dell-ogliastra.it',
  'dellogliastra.it',
  'en.it',
  'enna.it',
  'fc.it',
  'fe.it',
  'fermo.it',
  'ferrara.it',
  'fg.it',
  'fi.it',
  'firenze.it',
  'florence.it',
  'fm.it',
  'foggia.it',
  'forli-cesena.it',
  'forlì-cesena.it',
  'forlicesena.it',
  'forlìcesena.it',
  'fr.it',
  'frosinone.it',
  'ge.it',
  'genoa.it',
  'genova.it',
  'go.it',
  'gorizia.it',
  'gr.it',
  'grosseto.it',
  'iglesias-carbonia.it',
  'iglesiascarbonia.it',
  'im.it',
  'imperia.it',
  'is.it',
  'isernia.it',
  'kr.it',
  'la-spezia.it',
  'laquila.it',
  'laspezia.it',
  'latina.it',
  'lc.it',
  'le.it',
  'lecce.it',
  'lecco.it',
  'li.it',
  'livorno.it',
  'lo.it',
  'lodi.it',
  'lt.it',
  'lu.it',
  'lucca.it',
  'macerata.it',
  'mantova.it',
  'massa-carrara.it',
  'massacarrara.it',
  'matera.it',
  'mb.it',
  'mc.it',
  'me.it',
  'medio-campidano.it',
  'mediocampidano.it',
  'messina.it',
  'mi.it',
  'milan.it',
  'milano.it',
  'mn.it',
  'mo.it',
  'modena.it',
  'monza-brianza.it',
  'monza-e-della-brianza.it',
  'monza.it',
  'monzabrianza.it',
  'monzaebrianza.it',
  'monzaedellabrianza.it',
  'ms.it',
  'mt.it',
  'na.it',
  'naples.it',
  'napoli.it',
  'no.it',
  'novara.it',
  'nu.it',
  'nuoro.it',
  'og.it',
  'ogliastra.it',
  'olbia-tempio.it',
  'olbiatempio.it',
  'or.it',
  'oristano.it',
  'ot.it',
  'pa.it',
  'padova.it',
  'padua.it',
  'palermo.it',
  'parma.it',
  'pavia.it',
  'pc.it',
  'pd.it',
  'pe.it',
  'perugia.it',
  'pesaro-urbino.it',
  'pesarourbino.it',
  'pescara.it',
  'pg.it',
  'pi.it',
  'piacenza.it',
  'pisa.it',
  'pistoia.it',
  'pn.it',
  'po.it',
  'pordenone.it',
  'potenza.it',
  'pr.it',
  'prato.it',
  'pt.it',
  'pu.it',
  'pv.it',
  'pz.it',
  'ra.it',
  'ragusa.it',
  'ravenna.it',
  'rc.it',
  're.it',
  'reggio-calabria.it',
  'reggio-emilia.it',
  'reggiocalabria.it',
  'reggioemilia.it',
  'rg.it',
  'ri.it',
  'rieti.it',
  'rimini.it',
  'rm.it',
  'rn.it',
  'ro.it',
  'roma.it',
  'rome.it',
  'rovigo.it',
  'sa.it',
  'salerno.it',
  'sassari.it',
  'savona.it',
  'si.it',
  'siena.it',
  'siracusa.it',
  'so.it',
  'sondrio.it',
  'sp.it',
  'sr.it',
  'ss.it',
  'suedtirol.it',
  'südtirol.it',
  'sv.it',
  'ta.it',
  'taranto.it',
  'te.it',
  'tempio-olbia.it',
  'tempioolbia.it',
  'teramo.it',
  'terni.it',
  'tn.it',
  'to.it',
  'torino.it',
  'tp.it',
  'tr.it',
  'trani-andria-barletta.it',
  'trani-barletta-andria.it',
  'traniandriabarletta.it',
  'tranibarlettaandria.it',
  'trapani.it',
  'trento.it',
  'treviso.it',
  'trieste.it',
  'ts.it',
  'turin.it',
  'tv.it',
  'ud.it',
  'udine.it',
  'urbino-pesaro.it',
  'urbinopesaro.it',
  'va.it',
  'varese.it',
  'vb.it',
  'vc.it',
  've.it',
  'venezia.it',
  'venice.it',
  'verbania.it',
  'vercelli.it',
  'verona.it',
  'vi.it',
  'vibo-valentia.it',
  'vibovalentia.it',
  'vicenza.it',
  'viterbo.it',
  'vr.it',
  'vs.it',
  'vt.it',
  'vv.it',

  // je : http://www.channelisles.net/register-domains/
  // Confirmed by registry <nigel@channelisles.net> 2013-11-28

  'co.je',
  'net.je',
  'org.je',

  // jm : http://www.com.jm/register.html
  'jm',

  // jo : http://www.dns.jo/Registration_policy.aspx

  'com.jo',
  'org.jo',
  'net.jo',
  'edu.jo',
  'sch.jo',
  'gov.jo',
  'mil.jo',
  'name.jo',

  // jobs : https://en.wikipedia.org/wiki/.jobs

  // jp : https://en.wikipedia.org/wiki/.jp
  // http://jprs.co.jp/en/jpdomain.html
  // Submitted by registry <info@jprs.jp>

  // jp organizational type names
  'ac.jp',
  'ad.jp',
  'co.jp',
  'ed.jp',
  'go.jp',
  'gr.jp',
  'lg.jp',
  'ne.jp',
  'or.jp',
  // jp prefecture type names
  'aichi.jp',
  'akita.jp',
  'aomori.jp',
  'chiba.jp',
  'ehime.jp',
  'fukui.jp',
  'fukuoka.jp',
  'fukushima.jp',
  'gifu.jp',
  'gunma.jp',
  'hiroshima.jp',
  'hokkaido.jp',
  'hyogo.jp',
  'ibaraki.jp',
  'ishikawa.jp',
  'iwate.jp',
  'kagawa.jp',
  'kagoshima.jp',
  'kanagawa.jp',
  'kochi.jp',
  'kumamoto.jp',
  'kyoto.jp',
  'mie.jp',
  'miyagi.jp',
  'miyazaki.jp',
  'nagano.jp',
  'nagasaki.jp',
  'nara.jp',
  'niigata.jp',
  'oita.jp',
  'okayama.jp',
  'okinawa.jp',
  'osaka.jp',
  'saga.jp',
  'saitama.jp',
  'shiga.jp',
  'shimane.jp',
  'shizuoka.jp',
  'tochigi.jp',
  'tokushima.jp',
  'tokyo.jp',
  'tottori.jp',
  'toyama.jp',
  'wakayama.jp',
  'yamagata.jp',
  'yamaguchi.jp',
  'yamanashi.jp',
  '栃木.jp',
  '愛知.jp',
  '愛媛.jp',
  '兵庫.jp',
  '熊本.jp',
  '茨城.jp',
  '北海道.jp',
  '千葉.jp',
  '和歌山.jp',
  '長崎.jp',
  '長野.jp',
  '新潟.jp',
  '青森.jp',
  '静岡.jp',
  '東京.jp',
  '石川.jp',
  '埼玉.jp',
  '三重.jp',
  '京都.jp',
  '佐賀.jp',
  '大分.jp',
  '大阪.jp',
  '奈良.jp',
  '宮城.jp',
  '宮崎.jp',
  '富山.jp',
  '山口.jp',
  '山形.jp',
  '山梨.jp',
  '岩手.jp',
  '岐阜.jp',
  '岡山.jp',
  '島根.jp',
  '広島.jp',
  '徳島.jp',
  '沖縄.jp',
  '滋賀.jp',
  '神奈川.jp',
  '福井.jp',
  '福岡.jp',
  '福島.jp',
  '秋田.jp',
  '群馬.jp',
  '香川.jp',
  '高知.jp',
  '鳥取.jp',
  '鹿児島.jp',
  // jp geographic type names
  // http://jprs.jp/doc/rule/saisoku-1.html
  'kawasaki.jp',
  'kitakyushu.jp',
  'kobe.jp',
  'nagoya.jp',
  'sapporo.jp',
  'sendai.jp',
  'yokohama.jp',
  // !city.kawasaki.jp
  // !city.kitakyushu.jp
  // !city.kobe.jp
  // !city.nagoya.jp
  // !city.sapporo.jp
  // !city.sendai.jp
  // !city.yokohama.jp
  // 4th level registration
  'aisai.aichi.jp',
  'ama.aichi.jp',
  'anjo.aichi.jp',
  'asuke.aichi.jp',
  'chiryu.aichi.jp',
  'chita.aichi.jp',
  'fuso.aichi.jp',
  'gamagori.aichi.jp',
  'handa.aichi.jp',
  'hazu.aichi.jp',
  'hekinan.aichi.jp',
  'higashiura.aichi.jp',
  'ichinomiya.aichi.jp',
  'inazawa.aichi.jp',
  'inuyama.aichi.jp',
  'isshiki.aichi.jp',
  'iwakura.aichi.jp',
  'kanie.aichi.jp',
  'kariya.aichi.jp',
  'kasugai.aichi.jp',
  'kira.aichi.jp',
  'kiyosu.aichi.jp',
  'komaki.aichi.jp',
  'konan.aichi.jp',
  'kota.aichi.jp',
  'mihama.aichi.jp',
  'miyoshi.aichi.jp',
  'nishio.aichi.jp',
  'nisshin.aichi.jp',
  'obu.aichi.jp',
  'oguchi.aichi.jp',
  'oharu.aichi.jp',
  'okazaki.aichi.jp',
  'owariasahi.aichi.jp',
  'seto.aichi.jp',
  'shikatsu.aichi.jp',
  'shinshiro.aichi.jp',
  'shitara.aichi.jp',
  'tahara.aichi.jp',
  'takahama.aichi.jp',
  'tobishima.aichi.jp',
  'toei.aichi.jp',
  'togo.aichi.jp',
  'tokai.aichi.jp',
  'tokoname.aichi.jp',
  'toyoake.aichi.jp',
  'toyohashi.aichi.jp',
  'toyokawa.aichi.jp',
  'toyone.aichi.jp',
  'toyota.aichi.jp',
  'tsushima.aichi.jp',
  'yatomi.aichi.jp',
  'akita.akita.jp',
  'daisen.akita.jp',
  'fujisato.akita.jp',
  'gojome.akita.jp',
  'hachirogata.akita.jp',
  'happou.akita.jp',
  'higashinaruse.akita.jp',
  'honjo.akita.jp',
  'honjyo.akita.jp',
  'ikawa.akita.jp',
  'kamikoani.akita.jp',
  'kamioka.akita.jp',
  'katagami.akita.jp',
  'kazuno.akita.jp',
  'kitaakita.akita.jp',
  'kosaka.akita.jp',
  'kyowa.akita.jp',
  'misato.akita.jp',
  'mitane.akita.jp',
  'moriyoshi.akita.jp',
  'nikaho.akita.jp',
  'noshiro.akita.jp',
  'odate.akita.jp',
  'oga.akita.jp',
  'ogata.akita.jp',
  'semboku.akita.jp',
  'yokote.akita.jp',
  'yurihonjo.akita.jp',
  'aomori.aomori.jp',
  'gonohe.aomori.jp',
  'hachinohe.aomori.jp',
  'hashikami.aomori.jp',
  'hiranai.aomori.jp',
  'hirosaki.aomori.jp',
  'itayanagi.aomori.jp',
  'kuroishi.aomori.jp',
  'misawa.aomori.jp',
  'mutsu.aomori.jp',
  'nakadomari.aomori.jp',
  'noheji.aomori.jp',
  'oirase.aomori.jp',
  'owani.aomori.jp',
  'rokunohe.aomori.jp',
  'sannohe.aomori.jp',
  'shichinohe.aomori.jp',
  'shingo.aomori.jp',
  'takko.aomori.jp',
  'towada.aomori.jp',
  'tsugaru.aomori.jp',
  'tsuruta.aomori.jp',
  'abiko.chiba.jp',
  'asahi.chiba.jp',
  'chonan.chiba.jp',
  'chosei.chiba.jp',
  'choshi.chiba.jp',
  'chuo.chiba.jp',
  'funabashi.chiba.jp',
  'futtsu.chiba.jp',
  'hanamigawa.chiba.jp',
  'ichihara.chiba.jp',
  'ichikawa.chiba.jp',
  'ichinomiya.chiba.jp',
  'inzai.chiba.jp',
  'isumi.chiba.jp',
  'kamagaya.chiba.jp',
  'kamogawa.chiba.jp',
  'kashiwa.chiba.jp',
  'katori.chiba.jp',
  'katsuura.chiba.jp',
  'kimitsu.chiba.jp',
  'kisarazu.chiba.jp',
  'kozaki.chiba.jp',
  'kujukuri.chiba.jp',
  'kyonan.chiba.jp',
  'matsudo.chiba.jp',
  'midori.chiba.jp',
  'mihama.chiba.jp',
  'minamiboso.chiba.jp',
  'mobara.chiba.jp',
  'mutsuzawa.chiba.jp',
  'nagara.chiba.jp',
  'nagareyama.chiba.jp',
  'narashino.chiba.jp',
  'narita.chiba.jp',
  'noda.chiba.jp',
  'oamishirasato.chiba.jp',
  'omigawa.chiba.jp',
  'onjuku.chiba.jp',
  'otaki.chiba.jp',
  'sakae.chiba.jp',
  'sakura.chiba.jp',
  'shimofusa.chiba.jp',
  'shirako.chiba.jp',
  'shiroi.chiba.jp',
  'shisui.chiba.jp',
  'sodegaura.chiba.jp',
  'sosa.chiba.jp',
  'tako.chiba.jp',
  'tateyama.chiba.jp',
  'togane.chiba.jp',
  'tohnosho.chiba.jp',
  'tomisato.chiba.jp',
  'urayasu.chiba.jp',
  'yachimata.chiba.jp',
  'yachiyo.chiba.jp',
  'yokaichiba.chiba.jp',
  'yokoshibahikari.chiba.jp',
  'yotsukaido.chiba.jp',
  'ainan.ehime.jp',
  'honai.ehime.jp',
  'ikata.ehime.jp',
  'imabari.ehime.jp',
  'iyo.ehime.jp',
  'kamijima.ehime.jp',
  'kihoku.ehime.jp',
  'kumakogen.ehime.jp',
  'masaki.ehime.jp',
  'matsuno.ehime.jp',
  'matsuyama.ehime.jp',
  'namikata.ehime.jp',
  'niihama.ehime.jp',
  'ozu.ehime.jp',
  'saijo.ehime.jp',
  'seiyo.ehime.jp',
  'shikokuchuo.ehime.jp',
  'tobe.ehime.jp',
  'toon.ehime.jp',
  'uchiko.ehime.jp',
  'uwajima.ehime.jp',
  'yawatahama.ehime.jp',
  'echizen.fukui.jp',
  'eiheiji.fukui.jp',
  'fukui.fukui.jp',
  'ikeda.fukui.jp',
  'katsuyama.fukui.jp',
  'mihama.fukui.jp',
  'minamiechizen.fukui.jp',
  'obama.fukui.jp',
  'ohi.fukui.jp',
  'ono.fukui.jp',
  'sabae.fukui.jp',
  'sakai.fukui.jp',
  'takahama.fukui.jp',
  'tsuruga.fukui.jp',
  'wakasa.fukui.jp',
  'ashiya.fukuoka.jp',
  'buzen.fukuoka.jp',
  'chikugo.fukuoka.jp',
  'chikuho.fukuoka.jp',
  'chikujo.fukuoka.jp',
  'chikushino.fukuoka.jp',
  'chikuzen.fukuoka.jp',
  'chuo.fukuoka.jp',
  'dazaifu.fukuoka.jp',
  'fukuchi.fukuoka.jp',
  'hakata.fukuoka.jp',
  'higashi.fukuoka.jp',
  'hirokawa.fukuoka.jp',
  'hisayama.fukuoka.jp',
  'iizuka.fukuoka.jp',
  'inatsuki.fukuoka.jp',
  'kaho.fukuoka.jp',
  'kasuga.fukuoka.jp',
  'kasuya.fukuoka.jp',
  'kawara.fukuoka.jp',
  'keisen.fukuoka.jp',
  'koga.fukuoka.jp',
  'kurate.fukuoka.jp',
  'kurogi.fukuoka.jp',
  'kurume.fukuoka.jp',
  'minami.fukuoka.jp',
  'miyako.fukuoka.jp',
  'miyama.fukuoka.jp',
  'miyawaka.fukuoka.jp',
  'mizumaki.fukuoka.jp',
  'munakata.fukuoka.jp',
  'nakagawa.fukuoka.jp',
  'nakama.fukuoka.jp',
  'nishi.fukuoka.jp',
  'nogata.fukuoka.jp',
  'ogori.fukuoka.jp',
  'okagaki.fukuoka.jp',
  'okawa.fukuoka.jp',
  'oki.fukuoka.jp',
  'omuta.fukuoka.jp',
  'onga.fukuoka.jp',
  'onojo.fukuoka.jp',
  'oto.fukuoka.jp',
  'saigawa.fukuoka.jp',
  'sasaguri.fukuoka.jp',
  'shingu.fukuoka.jp',
  'shinyoshitomi.fukuoka.jp',
  'shonai.fukuoka.jp',
  'soeda.fukuoka.jp',
  'sue.fukuoka.jp',
  'tachiarai.fukuoka.jp',
  'tagawa.fukuoka.jp',
  'takata.fukuoka.jp',
  'toho.fukuoka.jp',
  'toyotsu.fukuoka.jp',
  'tsuiki.fukuoka.jp',
  'ukiha.fukuoka.jp',
  'umi.fukuoka.jp',
  'usui.fukuoka.jp',
  'yamada.fukuoka.jp',
  'yame.fukuoka.jp',
  'yanagawa.fukuoka.jp',
  'yukuhashi.fukuoka.jp',
  'aizubange.fukushima.jp',
  'aizumisato.fukushima.jp',
  'aizuwakamatsu.fukushima.jp',
  'asakawa.fukushima.jp',
  'bandai.fukushima.jp',
  'date.fukushima.jp',
  'fukushima.fukushima.jp',
  'furudono.fukushima.jp',
  'futaba.fukushima.jp',
  'hanawa.fukushima.jp',
  'higashi.fukushima.jp',
  'hirata.fukushima.jp',
  'hirono.fukushima.jp',
  'iitate.fukushima.jp',
  'inawashiro.fukushima.jp',
  'ishikawa.fukushima.jp',
  'iwaki.fukushima.jp',
  'izumizaki.fukushima.jp',
  'kagamiishi.fukushima.jp',
  'kaneyama.fukushima.jp',
  'kawamata.fukushima.jp',
  'kitakata.fukushima.jp',
  'kitashiobara.fukushima.jp',
  'koori.fukushima.jp',
  'koriyama.fukushima.jp',
  'kunimi.fukushima.jp',
  'miharu.fukushima.jp',
  'mishima.fukushima.jp',
  'namie.fukushima.jp',
  'nango.fukushima.jp',
  'nishiaizu.fukushima.jp',
  'nishigo.fukushima.jp',
  'okuma.fukushima.jp',
  'omotego.fukushima.jp',
  'ono.fukushima.jp',
  'otama.fukushima.jp',
  'samegawa.fukushima.jp',
  'shimogo.fukushima.jp',
  'shirakawa.fukushima.jp',
  'showa.fukushima.jp',
  'soma.fukushima.jp',
  'sukagawa.fukushima.jp',
  'taishin.fukushima.jp',
  'tamakawa.fukushima.jp',
  'tanagura.fukushima.jp',
  'tenei.fukushima.jp',
  'yabuki.fukushima.jp',
  'yamato.fukushima.jp',
  'yamatsuri.fukushima.jp',
  'yanaizu.fukushima.jp',
  'yugawa.fukushima.jp',
  'anpachi.gifu.jp',
  'ena.gifu.jp',
  'gifu.gifu.jp',
  'ginan.gifu.jp',
  'godo.gifu.jp',
  'gujo.gifu.jp',
  'hashima.gifu.jp',
  'hichiso.gifu.jp',
  'hida.gifu.jp',
  'higashishirakawa.gifu.jp',
  'ibigawa.gifu.jp',
  'ikeda.gifu.jp',
  'kakamigahara.gifu.jp',
  'kani.gifu.jp',
  'kasahara.gifu.jp',
  'kasamatsu.gifu.jp',
  'kawaue.gifu.jp',
  'kitagata.gifu.jp',
  'mino.gifu.jp',
  'minokamo.gifu.jp',
  'mitake.gifu.jp',
  'mizunami.gifu.jp',
  'motosu.gifu.jp',
  'nakatsugawa.gifu.jp',
  'ogaki.gifu.jp',
  'sakahogi.gifu.jp',
  'seki.gifu.jp',
  'sekigahara.gifu.jp',
  'shirakawa.gifu.jp',
  'tajimi.gifu.jp',
  'takayama.gifu.jp',
  'tarui.gifu.jp',
  'toki.gifu.jp',
  'tomika.gifu.jp',
  'wanouchi.gifu.jp',
  'yamagata.gifu.jp',
  'yaotsu.gifu.jp',
  'yoro.gifu.jp',
  'annaka.gunma.jp',
  'chiyoda.gunma.jp',
  'fujioka.gunma.jp',
  'higashiagatsuma.gunma.jp',
  'isesaki.gunma.jp',
  'itakura.gunma.jp',
  'kanna.gunma.jp',
  'kanra.gunma.jp',
  'katashina.gunma.jp',
  'kawaba.gunma.jp',
  'kiryu.gunma.jp',
  'kusatsu.gunma.jp',
  'maebashi.gunma.jp',
  'meiwa.gunma.jp',
  'midori.gunma.jp',
  'minakami.gunma.jp',
  'naganohara.gunma.jp',
  'nakanojo.gunma.jp',
  'nanmoku.gunma.jp',
  'numata.gunma.jp',
  'oizumi.gunma.jp',
  'ora.gunma.jp',
  'ota.gunma.jp',
  'shibukawa.gunma.jp',
  'shimonita.gunma.jp',
  'shinto.gunma.jp',
  'showa.gunma.jp',
  'takasaki.gunma.jp',
  'takayama.gunma.jp',
  'tamamura.gunma.jp',
  'tatebayashi.gunma.jp',
  'tomioka.gunma.jp',
  'tsukiyono.gunma.jp',
  'tsumagoi.gunma.jp',
  'ueno.gunma.jp',
  'yoshioka.gunma.jp',
  'asaminami.hiroshima.jp',
  'daiwa.hiroshima.jp',
  'etajima.hiroshima.jp',
  'fuchu.hiroshima.jp',
  'fukuyama.hiroshima.jp',
  'hatsukaichi.hiroshima.jp',
  'higashihiroshima.hiroshima.jp',
  'hongo.hiroshima.jp',
  'jinsekikogen.hiroshima.jp',
  'kaita.hiroshima.jp',
  'kui.hiroshima.jp',
  'kumano.hiroshima.jp',
  'kure.hiroshima.jp',
  'mihara.hiroshima.jp',
  'miyoshi.hiroshima.jp',
  'naka.hiroshima.jp',
  'onomichi.hiroshima.jp',
  'osakikamijima.hiroshima.jp',
  'otake.hiroshima.jp',
  'saka.hiroshima.jp',
  'sera.hiroshima.jp',
  'seranishi.hiroshima.jp',
  'shinichi.hiroshima.jp',
  'shobara.hiroshima.jp',
  'takehara.hiroshima.jp',
  'abashiri.hokkaido.jp',
  'abira.hokkaido.jp',
  'aibetsu.hokkaido.jp',
  'akabira.hokkaido.jp',
  'akkeshi.hokkaido.jp',
  'asahikawa.hokkaido.jp',
  'ashibetsu.hokkaido.jp',
  'ashoro.hokkaido.jp',
  'assabu.hokkaido.jp',
  'atsuma.hokkaido.jp',
  'bibai.hokkaido.jp',
  'biei.hokkaido.jp',
  'bifuka.hokkaido.jp',
  'bihoro.hokkaido.jp',
  'biratori.hokkaido.jp',
  'chippubetsu.hokkaido.jp',
  'chitose.hokkaido.jp',
  'date.hokkaido.jp',
  'ebetsu.hokkaido.jp',
  'embetsu.hokkaido.jp',
  'eniwa.hokkaido.jp',
  'erimo.hokkaido.jp',
  'esan.hokkaido.jp',
  'esashi.hokkaido.jp',
  'fukagawa.hokkaido.jp',
  'fukushima.hokkaido.jp',
  'furano.hokkaido.jp',
  'furubira.hokkaido.jp',
  'haboro.hokkaido.jp',
  'hakodate.hokkaido.jp',
  'hamatonbetsu.hokkaido.jp',
  'hidaka.hokkaido.jp',
  'higashikagura.hokkaido.jp',
  'higashikawa.hokkaido.jp',
  'hiroo.hokkaido.jp',
  'hokuryu.hokkaido.jp',
  'hokuto.hokkaido.jp',
  'honbetsu.hokkaido.jp',
  'horokanai.hokkaido.jp',
  'horonobe.hokkaido.jp',
  'ikeda.hokkaido.jp',
  'imakane.hokkaido.jp',
  'ishikari.hokkaido.jp',
  'iwamizawa.hokkaido.jp',
  'iwanai.hokkaido.jp',
  'kamifurano.hokkaido.jp',
  'kamikawa.hokkaido.jp',
  'kamishihoro.hokkaido.jp',
  'kamisunagawa.hokkaido.jp',
  'kamoenai.hokkaido.jp',
  'kayabe.hokkaido.jp',
  'kembuchi.hokkaido.jp',
  'kikonai.hokkaido.jp',
  'kimobetsu.hokkaido.jp',
  'kitahiroshima.hokkaido.jp',
  'kitami.hokkaido.jp',
  'kiyosato.hokkaido.jp',
  'koshimizu.hokkaido.jp',
  'kunneppu.hokkaido.jp',
  'kuriyama.hokkaido.jp',
  'kuromatsunai.hokkaido.jp',
  'kushiro.hokkaido.jp',
  'kutchan.hokkaido.jp',
  'kyowa.hokkaido.jp',
  'mashike.hokkaido.jp',
  'matsumae.hokkaido.jp',
  'mikasa.hokkaido.jp',
  'minamifurano.hokkaido.jp',
  'mombetsu.hokkaido.jp',
  'moseushi.hokkaido.jp',
  'mukawa.hokkaido.jp',
  'muroran.hokkaido.jp',
  'naie.hokkaido.jp',
  'nakagawa.hokkaido.jp',
  'nakasatsunai.hokkaido.jp',
  'nakatombetsu.hokkaido.jp',
  'nanae.hokkaido.jp',
  'nanporo.hokkaido.jp',
  'nayoro.hokkaido.jp',
  'nemuro.hokkaido.jp',
  'niikappu.hokkaido.jp',
  'niki.hokkaido.jp',
  'nishiokoppe.hokkaido.jp',
  'noboribetsu.hokkaido.jp',
  'numata.hokkaido.jp',
  'obihiro.hokkaido.jp',
  'obira.hokkaido.jp',
  'oketo.hokkaido.jp',
  'okoppe.hokkaido.jp',
  'otaru.hokkaido.jp',
  'otobe.hokkaido.jp',
  'otofuke.hokkaido.jp',
  'otoineppu.hokkaido.jp',
  'oumu.hokkaido.jp',
  'ozora.hokkaido.jp',
  'pippu.hokkaido.jp',
  'rankoshi.hokkaido.jp',
  'rebun.hokkaido.jp',
  'rikubetsu.hokkaido.jp',
  'rishiri.hokkaido.jp',
  'rishirifuji.hokkaido.jp',
  'saroma.hokkaido.jp',
  'sarufutsu.hokkaido.jp',
  'shakotan.hokkaido.jp',
  'shari.hokkaido.jp',
  'shibecha.hokkaido.jp',
  'shibetsu.hokkaido.jp',
  'shikabe.hokkaido.jp',
  'shikaoi.hokkaido.jp',
  'shimamaki.hokkaido.jp',
  'shimizu.hokkaido.jp',
  'shimokawa.hokkaido.jp',
  'shinshinotsu.hokkaido.jp',
  'shintoku.hokkaido.jp',
  'shiranuka.hokkaido.jp',
  'shiraoi.hokkaido.jp',
  'shiriuchi.hokkaido.jp',
  'sobetsu.hokkaido.jp',
  'sunagawa.hokkaido.jp',
  'taiki.hokkaido.jp',
  'takasu.hokkaido.jp',
  'takikawa.hokkaido.jp',
  'takinoue.hokkaido.jp',
  'teshikaga.hokkaido.jp',
  'tobetsu.hokkaido.jp',
  'tohma.hokkaido.jp',
  'tomakomai.hokkaido.jp',
  'tomari.hokkaido.jp',
  'toya.hokkaido.jp',
  'toyako.hokkaido.jp',
  'toyotomi.hokkaido.jp',
  'toyoura.hokkaido.jp',
  'tsubetsu.hokkaido.jp',
  'tsukigata.hokkaido.jp',
  'urakawa.hokkaido.jp',
  'urausu.hokkaido.jp',
  'uryu.hokkaido.jp',
  'utashinai.hokkaido.jp',
  'wakkanai.hokkaido.jp',
  'wassamu.hokkaido.jp',
  'yakumo.hokkaido.jp',
  'yoichi.hokkaido.jp',
  'aioi.hyogo.jp',
  'akashi.hyogo.jp',
  'ako.hyogo.jp',
  'amagasaki.hyogo.jp',
  'aogaki.hyogo.jp',
  'asago.hyogo.jp',
  'ashiya.hyogo.jp',
  'awaji.hyogo.jp',
  'fukusaki.hyogo.jp',
  'goshiki.hyogo.jp',
  'harima.hyogo.jp',
  'himeji.hyogo.jp',
  'ichikawa.hyogo.jp',
  'inagawa.hyogo.jp',
  'itami.hyogo.jp',
  'kakogawa.hyogo.jp',
  'kamigori.hyogo.jp',
  'kamikawa.hyogo.jp',
  'kasai.hyogo.jp',
  'kasuga.hyogo.jp',
  'kawanishi.hyogo.jp',
  'miki.hyogo.jp',
  'minamiawaji.hyogo.jp',
  'nishinomiya.hyogo.jp',
  'nishiwaki.hyogo.jp',
  'ono.hyogo.jp',
  'sanda.hyogo.jp',
  'sannan.hyogo.jp',
  'sasayama.hyogo.jp',
  'sayo.hyogo.jp',
  'shingu.hyogo.jp',
  'shinonsen.hyogo.jp',
  'shiso.hyogo.jp',
  'sumoto.hyogo.jp',
  'taishi.hyogo.jp',
  'taka.hyogo.jp',
  'takarazuka.hyogo.jp',
  'takasago.hyogo.jp',
  'takino.hyogo.jp',
  'tamba.hyogo.jp',
  'tatsuno.hyogo.jp',
  'toyooka.hyogo.jp',
  'yabu.hyogo.jp',
  'yashiro.hyogo.jp',
  'yoka.hyogo.jp',
  'yokawa.hyogo.jp',
  'ami.ibaraki.jp',
  'asahi.ibaraki.jp',
  'bando.ibaraki.jp',
  'chikusei.ibaraki.jp',
  'daigo.ibaraki.jp',
  'fujishiro.ibaraki.jp',
  'hitachi.ibaraki.jp',
  'hitachinaka.ibaraki.jp',
  'hitachiomiya.ibaraki.jp',
  'hitachiota.ibaraki.jp',
  'ibaraki.ibaraki.jp',
  'ina.ibaraki.jp',
  'inashiki.ibaraki.jp',
  'itako.ibaraki.jp',
  'iwama.ibaraki.jp',
  'joso.ibaraki.jp',
  'kamisu.ibaraki.jp',
  'kasama.ibaraki.jp',
  'kashima.ibaraki.jp',
  'kasumigaura.ibaraki.jp',
  'koga.ibaraki.jp',
  'miho.ibaraki.jp',
  'mito.ibaraki.jp',
  'moriya.ibaraki.jp',
  'naka.ibaraki.jp',
  'namegata.ibaraki.jp',
  'oarai.ibaraki.jp',
  'ogawa.ibaraki.jp',
  'omitama.ibaraki.jp',
  'ryugasaki.ibaraki.jp',
  'sakai.ibaraki.jp',
  'sakuragawa.ibaraki.jp',
  'shimodate.ibaraki.jp',
  'shimotsuma.ibaraki.jp',
  'shirosato.ibaraki.jp',
  'sowa.ibaraki.jp',
  'suifu.ibaraki.jp',
  'takahagi.ibaraki.jp',
  'tamatsukuri.ibaraki.jp',
  'tokai.ibaraki.jp',
  'tomobe.ibaraki.jp',
  'tone.ibaraki.jp',
  'toride.ibaraki.jp',
  'tsuchiura.ibaraki.jp',
  'tsukuba.ibaraki.jp',
  'uchihara.ibaraki.jp',
  'ushiku.ibaraki.jp',
  'yachiyo.ibaraki.jp',
  'yamagata.ibaraki.jp',
  'yawara.ibaraki.jp',
  'yuki.ibaraki.jp',
  'anamizu.ishikawa.jp',
  'hakui.ishikawa.jp',
  'hakusan.ishikawa.jp',
  'kaga.ishikawa.jp',
  'kahoku.ishikawa.jp',
  'kanazawa.ishikawa.jp',
  'kawakita.ishikawa.jp',
  'komatsu.ishikawa.jp',
  'nakanoto.ishikawa.jp',
  'nanao.ishikawa.jp',
  'nomi.ishikawa.jp',
  'nonoichi.ishikawa.jp',
  'noto.ishikawa.jp',
  'shika.ishikawa.jp',
  'suzu.ishikawa.jp',
  'tsubata.ishikawa.jp',
  'tsurugi.ishikawa.jp',
  'uchinada.ishikawa.jp',
  'wajima.ishikawa.jp',
  'fudai.iwate.jp',
  'fujisawa.iwate.jp',
  'hanamaki.iwate.jp',
  'hiraizumi.iwate.jp',
  'hirono.iwate.jp',
  'ichinohe.iwate.jp',
  'ichinoseki.iwate.jp',
  'iwaizumi.iwate.jp',
  'iwate.iwate.jp',
  'joboji.iwate.jp',
  'kamaishi.iwate.jp',
  'kanegasaki.iwate.jp',
  'karumai.iwate.jp',
  'kawai.iwate.jp',
  'kitakami.iwate.jp',
  'kuji.iwate.jp',
  'kunohe.iwate.jp',
  'kuzumaki.iwate.jp',
  'miyako.iwate.jp',
  'mizusawa.iwate.jp',
  'morioka.iwate.jp',
  'ninohe.iwate.jp',
  'noda.iwate.jp',
  'ofunato.iwate.jp',
  'oshu.iwate.jp',
  'otsuchi.iwate.jp',
  'rikuzentakata.iwate.jp',
  'shiwa.iwate.jp',
  'shizukuishi.iwate.jp',
  'sumita.iwate.jp',
  'tanohata.iwate.jp',
  'tono.iwate.jp',
  'yahaba.iwate.jp',
  'yamada.iwate.jp',
  'ayagawa.kagawa.jp',
  'higashikagawa.kagawa.jp',
  'kanonji.kagawa.jp',
  'kotohira.kagawa.jp',
  'manno.kagawa.jp',
  'marugame.kagawa.jp',
  'mitoyo.kagawa.jp',
  'naoshima.kagawa.jp',
  'sanuki.kagawa.jp',
  'tadotsu.kagawa.jp',
  'takamatsu.kagawa.jp',
  'tonosho.kagawa.jp',
  'uchinomi.kagawa.jp',
  'utazu.kagawa.jp',
  'zentsuji.kagawa.jp',
  'akune.kagoshima.jp',
  'amami.kagoshima.jp',
  'hioki.kagoshima.jp',
  'isa.kagoshima.jp',
  'isen.kagoshima.jp',
  'izumi.kagoshima.jp',
  'kagoshima.kagoshima.jp',
  'kanoya.kagoshima.jp',
  'kawanabe.kagoshima.jp',
  'kinko.kagoshima.jp',
  'kouyama.kagoshima.jp',
  'makurazaki.kagoshima.jp',
  'matsumoto.kagoshima.jp',
  'minamitane.kagoshima.jp',
  'nakatane.kagoshima.jp',
  'nishinoomote.kagoshima.jp',
  'satsumasendai.kagoshima.jp',
  'soo.kagoshima.jp',
  'tarumizu.kagoshima.jp',
  'yusui.kagoshima.jp',
  'aikawa.kanagawa.jp',
  'atsugi.kanagawa.jp',
  'ayase.kanagawa.jp',
  'chigasaki.kanagawa.jp',
  'ebina.kanagawa.jp',
  'fujisawa.kanagawa.jp',
  'hadano.kanagawa.jp',
  'hakone.kanagawa.jp',
  'hiratsuka.kanagawa.jp',
  'isehara.kanagawa.jp',
  'kaisei.kanagawa.jp',
  'kamakura.kanagawa.jp',
  'kiyokawa.kanagawa.jp',
  'matsuda.kanagawa.jp',
  'minamiashigara.kanagawa.jp',
  'miura.kanagawa.jp',
  'nakai.kanagawa.jp',
  'ninomiya.kanagawa.jp',
  'odawara.kanagawa.jp',
  'oi.kanagawa.jp',
  'oiso.kanagawa.jp',
  'sagamihara.kanagawa.jp',
  'samukawa.kanagawa.jp',
  'tsukui.kanagawa.jp',
  'yamakita.kanagawa.jp',
  'yamato.kanagawa.jp',
  'yokosuka.kanagawa.jp',
  'yugawara.kanagawa.jp',
  'zama.kanagawa.jp',
  'zushi.kanagawa.jp',
  'aki.kochi.jp',
  'geisei.kochi.jp',
  'hidaka.kochi.jp',
  'higashitsuno.kochi.jp',
  'ino.kochi.jp',
  'kagami.kochi.jp',
  'kami.kochi.jp',
  'kitagawa.kochi.jp',
  'kochi.kochi.jp',
  'mihara.kochi.jp',
  'motoyama.kochi.jp',
  'muroto.kochi.jp',
  'nahari.kochi.jp',
  'nakamura.kochi.jp',
  'nankoku.kochi.jp',
  'nishitosa.kochi.jp',
  'niyodogawa.kochi.jp',
  'ochi.kochi.jp',
  'okawa.kochi.jp',
  'otoyo.kochi.jp',
  'otsuki.kochi.jp',
  'sakawa.kochi.jp',
  'sukumo.kochi.jp',
  'susaki.kochi.jp',
  'tosa.kochi.jp',
  'tosashimizu.kochi.jp',
  'toyo.kochi.jp',
  'tsuno.kochi.jp',
  'umaji.kochi.jp',
  'yasuda.kochi.jp',
  'yusuhara.kochi.jp',
  'amakusa.kumamoto.jp',
  'arao.kumamoto.jp',
  'aso.kumamoto.jp',
  'choyo.kumamoto.jp',
  'gyokuto.kumamoto.jp',
  'kamiamakusa.kumamoto.jp',
  'kikuchi.kumamoto.jp',
  'kumamoto.kumamoto.jp',
  'mashiki.kumamoto.jp',
  'mifune.kumamoto.jp',
  'minamata.kumamoto.jp',
  'minamioguni.kumamoto.jp',
  'nagasu.kumamoto.jp',
  'nishihara.kumamoto.jp',
  'oguni.kumamoto.jp',
  'ozu.kumamoto.jp',
  'sumoto.kumamoto.jp',
  'takamori.kumamoto.jp',
  'uki.kumamoto.jp',
  'uto.kumamoto.jp',
  'yamaga.kumamoto.jp',
  'yamato.kumamoto.jp',
  'yatsushiro.kumamoto.jp',
  'ayabe.kyoto.jp',
  'fukuchiyama.kyoto.jp',
  'higashiyama.kyoto.jp',
  'ide.kyoto.jp',
  'ine.kyoto.jp',
  'joyo.kyoto.jp',
  'kameoka.kyoto.jp',
  'kamo.kyoto.jp',
  'kita.kyoto.jp',
  'kizu.kyoto.jp',
  'kumiyama.kyoto.jp',
  'kyotamba.kyoto.jp',
  'kyotanabe.kyoto.jp',
  'kyotango.kyoto.jp',
  'maizuru.kyoto.jp',
  'minami.kyoto.jp',
  'minamiyamashiro.kyoto.jp',
  'miyazu.kyoto.jp',
  'muko.kyoto.jp',
  'nagaokakyo.kyoto.jp',
  'nakagyo.kyoto.jp',
  'nantan.kyoto.jp',
  'oyamazaki.kyoto.jp',
  'sakyo.kyoto.jp',
  'seika.kyoto.jp',
  'tanabe.kyoto.jp',
  'uji.kyoto.jp',
  'ujitawara.kyoto.jp',
  'wazuka.kyoto.jp',
  'yamashina.kyoto.jp',
  'yawata.kyoto.jp',
  'asahi.mie.jp',
  'inabe.mie.jp',
  'ise.mie.jp',
  'kameyama.mie.jp',
  'kawagoe.mie.jp',
  'kiho.mie.jp',
  'kisosaki.mie.jp',
  'kiwa.mie.jp',
  'komono.mie.jp',
  'kumano.mie.jp',
  'kuwana.mie.jp',
  'matsusaka.mie.jp',
  'meiwa.mie.jp',
  'mihama.mie.jp',
  'minamiise.mie.jp',
  'misugi.mie.jp',
  'miyama.mie.jp',
  'nabari.mie.jp',
  'shima.mie.jp',
  'suzuka.mie.jp',
  'tado.mie.jp',
  'taiki.mie.jp',
  'taki.mie.jp',
  'tamaki.mie.jp',
  'toba.mie.jp',
  'tsu.mie.jp',
  'udono.mie.jp',
  'ureshino.mie.jp',
  'watarai.mie.jp',
  'yokkaichi.mie.jp',
  'furukawa.miyagi.jp',
  'higashimatsushima.miyagi.jp',
  'ishinomaki.miyagi.jp',
  'iwanuma.miyagi.jp',
  'kakuda.miyagi.jp',
  'kami.miyagi.jp',
  'kawasaki.miyagi.jp',
  'marumori.miyagi.jp',
  'matsushima.miyagi.jp',
  'minamisanriku.miyagi.jp',
  'misato.miyagi.jp',
  'murata.miyagi.jp',
  'natori.miyagi.jp',
  'ogawara.miyagi.jp',
  'ohira.miyagi.jp',
  'onagawa.miyagi.jp',
  'osaki.miyagi.jp',
  'rifu.miyagi.jp',
  'semine.miyagi.jp',
  'shibata.miyagi.jp',
  'shichikashuku.miyagi.jp',
  'shikama.miyagi.jp',
  'shiogama.miyagi.jp',
  'shiroishi.miyagi.jp',
  'tagajo.miyagi.jp',
  'taiwa.miyagi.jp',
  'tome.miyagi.jp',
  'tomiya.miyagi.jp',
  'wakuya.miyagi.jp',
  'watari.miyagi.jp',
  'yamamoto.miyagi.jp',
  'zao.miyagi.jp',
  'aya.miyazaki.jp',
  'ebino.miyazaki.jp',
  'gokase.miyazaki.jp',
  'hyuga.miyazaki.jp',
  'kadogawa.miyazaki.jp',
  'kawaminami.miyazaki.jp',
  'kijo.miyazaki.jp',
  'kitagawa.miyazaki.jp',
  'kitakata.miyazaki.jp',
  'kitaura.miyazaki.jp',
  'kobayashi.miyazaki.jp',
  'kunitomi.miyazaki.jp',
  'kushima.miyazaki.jp',
  'mimata.miyazaki.jp',
  'miyakonojo.miyazaki.jp',
  'miyazaki.miyazaki.jp',
  'morotsuka.miyazaki.jp',
  'nichinan.miyazaki.jp',
  'nishimera.miyazaki.jp',
  'nobeoka.miyazaki.jp',
  'saito.miyazaki.jp',
  'shiiba.miyazaki.jp',
  'shintomi.miyazaki.jp',
  'takaharu.miyazaki.jp',
  'takanabe.miyazaki.jp',
  'takazaki.miyazaki.jp',
  'tsuno.miyazaki.jp',
  'achi.nagano.jp',
  'agematsu.nagano.jp',
  'anan.nagano.jp',
  'aoki.nagano.jp',
  'asahi.nagano.jp',
  'azumino.nagano.jp',
  'chikuhoku.nagano.jp',
  'chikuma.nagano.jp',
  'chino.nagano.jp',
  'fujimi.nagano.jp',
  'hakuba.nagano.jp',
  'hara.nagano.jp',
  'hiraya.nagano.jp',
  'iida.nagano.jp',
  'iijima.nagano.jp',
  'iiyama.nagano.jp',
  'iizuna.nagano.jp',
  'ikeda.nagano.jp',
  'ikusaka.nagano.jp',
  'ina.nagano.jp',
  'karuizawa.nagano.jp',
  'kawakami.nagano.jp',
  'kiso.nagano.jp',
  'kisofukushima.nagano.jp',
  'kitaaiki.nagano.jp',
  'komagane.nagano.jp',
  'komoro.nagano.jp',
  'matsukawa.nagano.jp',
  'matsumoto.nagano.jp',
  'miasa.nagano.jp',
  'minamiaiki.nagano.jp',
  'minamimaki.nagano.jp',
  'minamiminowa.nagano.jp',
  'minowa.nagano.jp',
  'miyada.nagano.jp',
  'miyota.nagano.jp',
  'mochizuki.nagano.jp',
  'nagano.nagano.jp',
  'nagawa.nagano.jp',
  'nagiso.nagano.jp',
  'nakagawa.nagano.jp',
  'nakano.nagano.jp',
  'nozawaonsen.nagano.jp',
  'obuse.nagano.jp',
  'ogawa.nagano.jp',
  'okaya.nagano.jp',
  'omachi.nagano.jp',
  'omi.nagano.jp',
  'ookuwa.nagano.jp',
  'ooshika.nagano.jp',
  'otaki.nagano.jp',
  'otari.nagano.jp',
  'sakae.nagano.jp',
  'sakaki.nagano.jp',
  'saku.nagano.jp',
  'sakuho.nagano.jp',
  'shimosuwa.nagano.jp',
  'shinanomachi.nagano.jp',
  'shiojiri.nagano.jp',
  'suwa.nagano.jp',
  'suzaka.nagano.jp',
  'takagi.nagano.jp',
  'takamori.nagano.jp',
  'takayama.nagano.jp',
  'tateshina.nagano.jp',
  'tatsuno.nagano.jp',
  'togakushi.nagano.jp',
  'togura.nagano.jp',
  'tomi.nagano.jp',
  'ueda.nagano.jp',
  'wada.nagano.jp',
  'yamagata.nagano.jp',
  'yamanouchi.nagano.jp',
  'yasaka.nagano.jp',
  'yasuoka.nagano.jp',
  'chijiwa.nagasaki.jp',
  'futsu.nagasaki.jp',
  'goto.nagasaki.jp',
  'hasami.nagasaki.jp',
  'hirado.nagasaki.jp',
  'iki.nagasaki.jp',
  'isahaya.nagasaki.jp',
  'kawatana.nagasaki.jp',
  'kuchinotsu.nagasaki.jp',
  'matsuura.nagasaki.jp',
  'nagasaki.nagasaki.jp',
  'obama.nagasaki.jp',
  'omura.nagasaki.jp',
  'oseto.nagasaki.jp',
  'saikai.nagasaki.jp',
  'sasebo.nagasaki.jp',
  'seihi.nagasaki.jp',
  'shimabara.nagasaki.jp',
  'shinkamigoto.nagasaki.jp',
  'togitsu.nagasaki.jp',
  'tsushima.nagasaki.jp',
  'unzen.nagasaki.jp',
  'ando.nara.jp',
  'gose.nara.jp',
  'heguri.nara.jp',
  'higashiyoshino.nara.jp',
  'ikaruga.nara.jp',
  'ikoma.nara.jp',
  'kamikitayama.nara.jp',
  'kanmaki.nara.jp',
  'kashiba.nara.jp',
  'kashihara.nara.jp',
  'katsuragi.nara.jp',
  'kawai.nara.jp',
  'kawakami.nara.jp',
  'kawanishi.nara.jp',
  'koryo.nara.jp',
  'kurotaki.nara.jp',
  'mitsue.nara.jp',
  'miyake.nara.jp',
  'nara.nara.jp',
  'nosegawa.nara.jp',
  'oji.nara.jp',
  'ouda.nara.jp',
  'oyodo.nara.jp',
  'sakurai.nara.jp',
  'sango.nara.jp',
  'shimoichi.nara.jp',
  'shimokitayama.nara.jp',
  'shinjo.nara.jp',
  'soni.nara.jp',
  'takatori.nara.jp',
  'tawaramoto.nara.jp',
  'tenkawa.nara.jp',
  'tenri.nara.jp',
  'uda.nara.jp',
  'yamatokoriyama.nara.jp',
  'yamatotakada.nara.jp',
  'yamazoe.nara.jp',
  'yoshino.nara.jp',
  'aga.niigata.jp',
  'agano.niigata.jp',
  'gosen.niigata.jp',
  'itoigawa.niigata.jp',
  'izumozaki.niigata.jp',
  'joetsu.niigata.jp',
  'kamo.niigata.jp',
  'kariwa.niigata.jp',
  'kashiwazaki.niigata.jp',
  'minamiuonuma.niigata.jp',
  'mitsuke.niigata.jp',
  'muika.niigata.jp',
  'murakami.niigata.jp',
  'myoko.niigata.jp',
  'nagaoka.niigata.jp',
  'niigata.niigata.jp',
  'ojiya.niigata.jp',
  'omi.niigata.jp',
  'sado.niigata.jp',
  'sanjo.niigata.jp',
  'seiro.niigata.jp',
  'seirou.niigata.jp',
  'sekikawa.niigata.jp',
  'shibata.niigata.jp',
  'tagami.niigata.jp',
  'tainai.niigata.jp',
  'tochio.niigata.jp',
  'tokamachi.niigata.jp',
  'tsubame.niigata.jp',
  'tsunan.niigata.jp',
  'uonuma.niigata.jp',
  'yahiko.niigata.jp',
  'yoita.niigata.jp',
  'yuzawa.niigata.jp',
  'beppu.oita.jp',
  'bungoono.oita.jp',
  'bungotakada.oita.jp',
  'hasama.oita.jp',
  'hiji.oita.jp',
  'himeshima.oita.jp',
  'hita.oita.jp',
  'kamitsue.oita.jp',
  'kokonoe.oita.jp',
  'kuju.oita.jp',
  'kunisaki.oita.jp',
  'kusu.oita.jp',
  'oita.oita.jp',
  'saiki.oita.jp',
  'taketa.oita.jp',
  'tsukumi.oita.jp',
  'usa.oita.jp',
  'usuki.oita.jp',
  'yufu.oita.jp',
  'akaiwa.okayama.jp',
  'asakuchi.okayama.jp',
  'bizen.okayama.jp',
  'hayashima.okayama.jp',
  'ibara.okayama.jp',
  'kagamino.okayama.jp',
  'kasaoka.okayama.jp',
  'kibichuo.okayama.jp',
  'kumenan.okayama.jp',
  'kurashiki.okayama.jp',
  'maniwa.okayama.jp',
  'misaki.okayama.jp',
  'nagi.okayama.jp',
  'niimi.okayama.jp',
  'nishiawakura.okayama.jp',
  'okayama.okayama.jp',
  'satosho.okayama.jp',
  'setouchi.okayama.jp',
  'shinjo.okayama.jp',
  'shoo.okayama.jp',
  'soja.okayama.jp',
  'takahashi.okayama.jp',
  'tamano.okayama.jp',
  'tsuyama.okayama.jp',
  'wake.okayama.jp',
  'yakage.okayama.jp',
  'aguni.okinawa.jp',
  'ginowan.okinawa.jp',
  'ginoza.okinawa.jp',
  'gushikami.okinawa.jp',
  'haebaru.okinawa.jp',
  'higashi.okinawa.jp',
  'hirara.okinawa.jp',
  'iheya.okinawa.jp',
  'ishigaki.okinawa.jp',
  'ishikawa.okinawa.jp',
  'itoman.okinawa.jp',
  'izena.okinawa.jp',
  'kadena.okinawa.jp',
  'kin.okinawa.jp',
  'kitadaito.okinawa.jp',
  'kitanakagusuku.okinawa.jp',
  'kumejima.okinawa.jp',
  'kunigami.okinawa.jp',
  'minamidaito.okinawa.jp',
  'motobu.okinawa.jp',
  'nago.okinawa.jp',
  'naha.okinawa.jp',
  'nakagusuku.okinawa.jp',
  'nakijin.okinawa.jp',
  'nanjo.okinawa.jp',
  'nishihara.okinawa.jp',
  'ogimi.okinawa.jp',
  'okinawa.okinawa.jp',
  'onna.okinawa.jp',
  'shimoji.okinawa.jp',
  'taketomi.okinawa.jp',
  'tarama.okinawa.jp',
  'tokashiki.okinawa.jp',
  'tomigusuku.okinawa.jp',
  'tonaki.okinawa.jp',
  'urasoe.okinawa.jp',
  'uruma.okinawa.jp',
  'yaese.okinawa.jp',
  'yomitan.okinawa.jp',
  'yonabaru.okinawa.jp',
  'yonaguni.okinawa.jp',
  'zamami.okinawa.jp',
  'abeno.osaka.jp',
  'chihayaakasaka.osaka.jp',
  'chuo.osaka.jp',
  'daito.osaka.jp',
  'fujiidera.osaka.jp',
  'habikino.osaka.jp',
  'hannan.osaka.jp',
  'higashiosaka.osaka.jp',
  'higashisumiyoshi.osaka.jp',
  'higashiyodogawa.osaka.jp',
  'hirakata.osaka.jp',
  'ibaraki.osaka.jp',
  'ikeda.osaka.jp',
  'izumi.osaka.jp',
  'izumiotsu.osaka.jp',
  'izumisano.osaka.jp',
  'kadoma.osaka.jp',
  'kaizuka.osaka.jp',
  'kanan.osaka.jp',
  'kashiwara.osaka.jp',
  'katano.osaka.jp',
  'kawachinagano.osaka.jp',
  'kishiwada.osaka.jp',
  'kita.osaka.jp',
  'kumatori.osaka.jp',
  'matsubara.osaka.jp',
  'minato.osaka.jp',
  'minoh.osaka.jp',
  'misaki.osaka.jp',
  'moriguchi.osaka.jp',
  'neyagawa.osaka.jp',
  'nishi.osaka.jp',
  'nose.osaka.jp',
  'osakasayama.osaka.jp',
  'sakai.osaka.jp',
  'sayama.osaka.jp',
  'sennan.osaka.jp',
  'settsu.osaka.jp',
  'shijonawate.osaka.jp',
  'shimamoto.osaka.jp',
  'suita.osaka.jp',
  'tadaoka.osaka.jp',
  'taishi.osaka.jp',
  'tajiri.osaka.jp',
  'takaishi.osaka.jp',
  'takatsuki.osaka.jp',
  'tondabayashi.osaka.jp',
  'toyonaka.osaka.jp',
  'toyono.osaka.jp',
  'yao.osaka.jp',
  'ariake.saga.jp',
  'arita.saga.jp',
  'fukudomi.saga.jp',
  'genkai.saga.jp',
  'hamatama.saga.jp',
  'hizen.saga.jp',
  'imari.saga.jp',
  'kamimine.saga.jp',
  'kanzaki.saga.jp',
  'karatsu.saga.jp',
  'kashima.saga.jp',
  'kitagata.saga.jp',
  'kitahata.saga.jp',
  'kiyama.saga.jp',
  'kouhoku.saga.jp',
  'kyuragi.saga.jp',
  'nishiarita.saga.jp',
  'ogi.saga.jp',
  'omachi.saga.jp',
  'ouchi.saga.jp',
  'saga.saga.jp',
  'shiroishi.saga.jp',
  'taku.saga.jp',
  'tara.saga.jp',
  'tosu.saga.jp',
  'yoshinogari.saga.jp',
  'arakawa.saitama.jp',
  'asaka.saitama.jp',
  'chichibu.saitama.jp',
  'fujimi.saitama.jp',
  'fujimino.saitama.jp',
  'fukaya.saitama.jp',
  'hanno.saitama.jp',
  'hanyu.saitama.jp',
  'hasuda.saitama.jp',
  'hatogaya.saitama.jp',
  'hatoyama.saitama.jp',
  'hidaka.saitama.jp',
  'higashichichibu.saitama.jp',
  'higashimatsuyama.saitama.jp',
  'honjo.saitama.jp',
  'ina.saitama.jp',
  'iruma.saitama.jp',
  'iwatsuki.saitama.jp',
  'kamiizumi.saitama.jp',
  'kamikawa.saitama.jp',
  'kamisato.saitama.jp',
  'kasukabe.saitama.jp',
  'kawagoe.saitama.jp',
  'kawaguchi.saitama.jp',
  'kawajima.saitama.jp',
  'kazo.saitama.jp',
  'kitamoto.saitama.jp',
  'koshigaya.saitama.jp',
  'kounosu.saitama.jp',
  'kuki.saitama.jp',
  'kumagaya.saitama.jp',
  'matsubushi.saitama.jp',
  'minano.saitama.jp',
  'misato.saitama.jp',
  'miyashiro.saitama.jp',
  'miyoshi.saitama.jp',
  'moroyama.saitama.jp',
  'nagatoro.saitama.jp',
  'namegawa.saitama.jp',
  'niiza.saitama.jp',
  'ogano.saitama.jp',
  'ogawa.saitama.jp',
  'ogose.saitama.jp',
  'okegawa.saitama.jp',
  'omiya.saitama.jp',
  'otaki.saitama.jp',
  'ranzan.saitama.jp',
  'ryokami.saitama.jp',
  'saitama.saitama.jp',
  'sakado.saitama.jp',
  'satte.saitama.jp',
  'sayama.saitama.jp',
  'shiki.saitama.jp',
  'shiraoka.saitama.jp',
  'soka.saitama.jp',
  'sugito.saitama.jp',
  'toda.saitama.jp',
  'tokigawa.saitama.jp',
  'tokorozawa.saitama.jp',
  'tsurugashima.saitama.jp',
  'urawa.saitama.jp',
  'warabi.saitama.jp',
  'yashio.saitama.jp',
  'yokoze.saitama.jp',
  'yono.saitama.jp',
  'yorii.saitama.jp',
  'yoshida.saitama.jp',
  'yoshikawa.saitama.jp',
  'yoshimi.saitama.jp',
  'aisho.shiga.jp',
  'gamo.shiga.jp',
  'higashiomi.shiga.jp',
  'hikone.shiga.jp',
  'koka.shiga.jp',
  'konan.shiga.jp',
  'kosei.shiga.jp',
  'koto.shiga.jp',
  'kusatsu.shiga.jp',
  'maibara.shiga.jp',
  'moriyama.shiga.jp',
  'nagahama.shiga.jp',
  'nishiazai.shiga.jp',
  'notogawa.shiga.jp',
  'omihachiman.shiga.jp',
  'otsu.shiga.jp',
  'ritto.shiga.jp',
  'ryuoh.shiga.jp',
  'takashima.shiga.jp',
  'takatsuki.shiga.jp',
  'torahime.shiga.jp',
  'toyosato.shiga.jp',
  'yasu.shiga.jp',
  'akagi.shimane.jp',
  'ama.shimane.jp',
  'gotsu.shimane.jp',
  'hamada.shimane.jp',
  'higashiizumo.shimane.jp',
  'hikawa.shimane.jp',
  'hikimi.shimane.jp',
  'izumo.shimane.jp',
  'kakinoki.shimane.jp',
  'masuda.shimane.jp',
  'matsue.shimane.jp',
  'misato.shimane.jp',
  'nishinoshima.shimane.jp',
  'ohda.shimane.jp',
  'okinoshima.shimane.jp',
  'okuizumo.shimane.jp',
  'shimane.shimane.jp',
  'tamayu.shimane.jp',
  'tsuwano.shimane.jp',
  'unnan.shimane.jp',
  'yakumo.shimane.jp',
  'yasugi.shimane.jp',
  'yatsuka.shimane.jp',
  'arai.shizuoka.jp',
  'atami.shizuoka.jp',
  'fuji.shizuoka.jp',
  'fujieda.shizuoka.jp',
  'fujikawa.shizuoka.jp',
  'fujinomiya.shizuoka.jp',
  'fukuroi.shizuoka.jp',
  'gotemba.shizuoka.jp',
  'haibara.shizuoka.jp',
  'hamamatsu.shizuoka.jp',
  'higashiizu.shizuoka.jp',
  'ito.shizuoka.jp',
  'iwata.shizuoka.jp',
  'izu.shizuoka.jp',
  'izunokuni.shizuoka.jp',
  'kakegawa.shizuoka.jp',
  'kannami.shizuoka.jp',
  'kawanehon.shizuoka.jp',
  'kawazu.shizuoka.jp',
  'kikugawa.shizuoka.jp',
  'kosai.shizuoka.jp',
  'makinohara.shizuoka.jp',
  'matsuzaki.shizuoka.jp',
  'minamiizu.shizuoka.jp',
  'mishima.shizuoka.jp',
  'morimachi.shizuoka.jp',
  'nishiizu.shizuoka.jp',
  'numazu.shizuoka.jp',
  'omaezaki.shizuoka.jp',
  'shimada.shizuoka.jp',
  'shimizu.shizuoka.jp',
  'shimoda.shizuoka.jp',
  'shizuoka.shizuoka.jp',
  'susono.shizuoka.jp',
  'yaizu.shizuoka.jp',
  'yoshida.shizuoka.jp',
  'ashikaga.tochigi.jp',
  'bato.tochigi.jp',
  'haga.tochigi.jp',
  'ichikai.tochigi.jp',
  'iwafune.tochigi.jp',
  'kaminokawa.tochigi.jp',
  'kanuma.tochigi.jp',
  'karasuyama.tochigi.jp',
  'kuroiso.tochigi.jp',
  'mashiko.tochigi.jp',
  'mibu.tochigi.jp',
  'moka.tochigi.jp',
  'motegi.tochigi.jp',
  'nasu.tochigi.jp',
  'nasushiobara.tochigi.jp',
  'nikko.tochigi.jp',
  'nishikata.tochigi.jp',
  'nogi.tochigi.jp',
  'ohira.tochigi.jp',
  'ohtawara.tochigi.jp',
  'oyama.tochigi.jp',
  'sakura.tochigi.jp',
  'sano.tochigi.jp',
  'shimotsuke.tochigi.jp',
  'shioya.tochigi.jp',
  'takanezawa.tochigi.jp',
  'tochigi.tochigi.jp',
  'tsuga.tochigi.jp',
  'ujiie.tochigi.jp',
  'utsunomiya.tochigi.jp',
  'yaita.tochigi.jp',
  'aizumi.tokushima.jp',
  'anan.tokushima.jp',
  'ichiba.tokushima.jp',
  'itano.tokushima.jp',
  'kainan.tokushima.jp',
  'komatsushima.tokushima.jp',
  'matsushige.tokushima.jp',
  'mima.tokushima.jp',
  'minami.tokushima.jp',
  'miyoshi.tokushima.jp',
  'mugi.tokushima.jp',
  'nakagawa.tokushima.jp',
  'naruto.tokushima.jp',
  'sanagochi.tokushima.jp',
  'shishikui.tokushima.jp',
  'tokushima.tokushima.jp',
  'wajiki.tokushima.jp',
  'adachi.tokyo.jp',
  'akiruno.tokyo.jp',
  'akishima.tokyo.jp',
  'aogashima.tokyo.jp',
  'arakawa.tokyo.jp',
  'bunkyo.tokyo.jp',
  'chiyoda.tokyo.jp',
  'chofu.tokyo.jp',
  'chuo.tokyo.jp',
  'edogawa.tokyo.jp',
  'fuchu.tokyo.jp',
  'fussa.tokyo.jp',
  'hachijo.tokyo.jp',
  'hachioji.tokyo.jp',
  'hamura.tokyo.jp',
  'higashikurume.tokyo.jp',
  'higashimurayama.tokyo.jp',
  'higashiyamato.tokyo.jp',
  'hino.tokyo.jp',
  'hinode.tokyo.jp',
  'hinohara.tokyo.jp',
  'inagi.tokyo.jp',
  'itabashi.tokyo.jp',
  'katsushika.tokyo.jp',
  'kita.tokyo.jp',
  'kiyose.tokyo.jp',
  'kodaira.tokyo.jp',
  'koganei.tokyo.jp',
  'kokubunji.tokyo.jp',
  'komae.tokyo.jp',
  'koto.tokyo.jp',
  'kouzushima.tokyo.jp',
  'kunitachi.tokyo.jp',
  'machida.tokyo.jp',
  'meguro.tokyo.jp',
  'minato.tokyo.jp',
  'mitaka.tokyo.jp',
  'mizuho.tokyo.jp',
  'musashimurayama.tokyo.jp',
  'musashino.tokyo.jp',
  'nakano.tokyo.jp',
  'nerima.tokyo.jp',
  'ogasawara.tokyo.jp',
  'okutama.tokyo.jp',
  'ome.tokyo.jp',
  'oshima.tokyo.jp',
  'ota.tokyo.jp',
  'setagaya.tokyo.jp',
  'shibuya.tokyo.jp',
  'shinagawa.tokyo.jp',
  'shinjuku.tokyo.jp',
  'suginami.tokyo.jp',
  'sumida.tokyo.jp',
  'tachikawa.tokyo.jp',
  'taito.tokyo.jp',
  'tama.tokyo.jp',
  'toshima.tokyo.jp',
  'chizu.tottori.jp',
  'hino.tottori.jp',
  'kawahara.tottori.jp',
  'koge.tottori.jp',
  'kotoura.tottori.jp',
  'misasa.tottori.jp',
  'nanbu.tottori.jp',
  'nichinan.tottori.jp',
  'sakaiminato.tottori.jp',
  'tottori.tottori.jp',
  'wakasa.tottori.jp',
  'yazu.tottori.jp',
  'yonago.tottori.jp',
  'asahi.toyama.jp',
  'fuchu.toyama.jp',
  'fukumitsu.toyama.jp',
  'funahashi.toyama.jp',
  'himi.toyama.jp',
  'imizu.toyama.jp',
  'inami.toyama.jp',
  'johana.toyama.jp',
  'kamiichi.toyama.jp',
  'kurobe.toyama.jp',
  'nakaniikawa.toyama.jp',
  'namerikawa.toyama.jp',
  'nanto.toyama.jp',
  'nyuzen.toyama.jp',
  'oyabe.toyama.jp',
  'taira.toyama.jp',
  'takaoka.toyama.jp',
  'tateyama.toyama.jp',
  'toga.toyama.jp',
  'tonami.toyama.jp',
  'toyama.toyama.jp',
  'unazuki.toyama.jp',
  'uozu.toyama.jp',
  'yamada.toyama.jp',
  'arida.wakayama.jp',
  'aridagawa.wakayama.jp',
  'gobo.wakayama.jp',
  'hashimoto.wakayama.jp',
  'hidaka.wakayama.jp',
  'hirogawa.wakayama.jp',
  'inami.wakayama.jp',
  'iwade.wakayama.jp',
  'kainan.wakayama.jp',
  'kamitonda.wakayama.jp',
  'katsuragi.wakayama.jp',
  'kimino.wakayama.jp',
  'kinokawa.wakayama.jp',
  'kitayama.wakayama.jp',
  'koya.wakayama.jp',
  'koza.wakayama.jp',
  'kozagawa.wakayama.jp',
  'kudoyama.wakayama.jp',
  'kushimoto.wakayama.jp',
  'mihama.wakayama.jp',
  'misato.wakayama.jp',
  'nachikatsuura.wakayama.jp',
  'shingu.wakayama.jp',
  'shirahama.wakayama.jp',
  'taiji.wakayama.jp',
  'tanabe.wakayama.jp',
  'wakayama.wakayama.jp',
  'yuasa.wakayama.jp',
  'yura.wakayama.jp',
  'asahi.yamagata.jp',
  'funagata.yamagata.jp',
  'higashine.yamagata.jp',
  'iide.yamagata.jp',
  'kahoku.yamagata.jp',
  'kaminoyama.yamagata.jp',
  'kaneyama.yamagata.jp',
  'kawanishi.yamagata.jp',
  'mamurogawa.yamagata.jp',
  'mikawa.yamagata.jp',
  'murayama.yamagata.jp',
  'nagai.yamagata.jp',
  'nakayama.yamagata.jp',
  'nanyo.yamagata.jp',
  'nishikawa.yamagata.jp',
  'obanazawa.yamagata.jp',
  'oe.yamagata.jp',
  'oguni.yamagata.jp',
  'ohkura.yamagata.jp',
  'oishida.yamagata.jp',
  'sagae.yamagata.jp',
  'sakata.yamagata.jp',
  'sakegawa.yamagata.jp',
  'shinjo.yamagata.jp',
  'shirataka.yamagata.jp',
  'shonai.yamagata.jp',
  'takahata.yamagata.jp',
  'tendo.yamagata.jp',
  'tozawa.yamagata.jp',
  'tsuruoka.yamagata.jp',
  'yamagata.yamagata.jp',
  'yamanobe.yamagata.jp',
  'yonezawa.yamagata.jp',
  'yuza.yamagata.jp',
  'abu.yamaguchi.jp',
  'hagi.yamaguchi.jp',
  'hikari.yamaguchi.jp',
  'hofu.yamaguchi.jp',
  'iwakuni.yamaguchi.jp',
  'kudamatsu.yamaguchi.jp',
  'mitou.yamaguchi.jp',
  'nagato.yamaguchi.jp',
  'oshima.yamaguchi.jp',
  'shimonoseki.yamaguchi.jp',
  'shunan.yamaguchi.jp',
  'tabuse.yamaguchi.jp',
  'tokuyama.yamaguchi.jp',
  'toyota.yamaguchi.jp',
  'ube.yamaguchi.jp',
  'yuu.yamaguchi.jp',
  'chuo.yamanashi.jp',
  'doshi.yamanashi.jp',
  'fuefuki.yamanashi.jp',
  'fujikawa.yamanashi.jp',
  'fujikawaguchiko.yamanashi.jp',
  'fujiyoshida.yamanashi.jp',
  'hayakawa.yamanashi.jp',
  'hokuto.yamanashi.jp',
  'ichikawamisato.yamanashi.jp',
  'kai.yamanashi.jp',
  'kofu.yamanashi.jp',
  'koshu.yamanashi.jp',
  'kosuge.yamanashi.jp',
  'minami-alps.yamanashi.jp',
  'minobu.yamanashi.jp',
  'nakamichi.yamanashi.jp',
  'nanbu.yamanashi.jp',
  'narusawa.yamanashi.jp',
  'nirasaki.yamanashi.jp',
  'nishikatsura.yamanashi.jp',
  'oshino.yamanashi.jp',
  'otsuki.yamanashi.jp',
  'showa.yamanashi.jp',
  'tabayama.yamanashi.jp',
  'tsuru.yamanashi.jp',
  'uenohara.yamanashi.jp',
  'yamanakako.yamanashi.jp',
  'yamanashi.yamanashi.jp',

  // ke : http://www.kenic.or.ke/index.php/en/ke-domains/ke-domains

  'ac.ke',
  'co.ke',
  'go.ke',
  'info.ke',
  'me.ke',
  'mobi.ke',
  'ne.ke',
  'or.ke',
  'sc.ke',

  // kg : http://www.domain.kg/dmn_n.html

  'org.kg',
  'net.kg',
  'com.kg',
  'edu.kg',
  'gov.kg',
  'mil.kg',

  // kh : http://www.mptc.gov.kh/dns_registration.htm
  'kh',

  // ki : http://www.ki/dns/index.html

  'edu.ki',
  'biz.ki',
  'net.ki',
  'org.ki',
  'gov.ki',
  'info.ki',
  'com.ki',

  // km : https://en.wikipedia.org/wiki/.km
  // http://www.domaine.km/documents/charte.doc

  'org.km',
  'nom.km',
  'gov.km',
  'prd.km',
  'tm.km',
  'edu.km',
  'mil.km',
  'ass.km',
  'com.km',
  // These are only mentioned as proposed suggestions at domaine.km, but
  // https://en.wikipedia.org/wiki/.km says they're available for registration:
  'coop.km',
  'asso.km',
  'presse.km',
  'medecin.km',
  'notaires.km',
  'pharmaciens.km',
  'veterinaire.km',
  'gouv.km',

  // kn : https://en.wikipedia.org/wiki/.kn
  // http://www.dot.kn/domainRules.html

  'net.kn',
  'org.kn',
  'edu.kn',
  'gov.kn',

  // kp : http://www.kcce.kp/en_index.php

  'com.kp',
  'edu.kp',
  'gov.kp',
  'org.kp',
  'rep.kp',
  'tra.kp',

  // kr : https://en.wikipedia.org/wiki/.kr
  // see also: http://domain.nida.or.kr/eng/registration.jsp

  'ac.kr',
  'co.kr',
  'es.kr',
  'go.kr',
  'hs.kr',
  'kg.kr',
  'mil.kr',
  'ms.kr',
  'ne.kr',
  'or.kr',
  'pe.kr',
  're.kr',
  'sc.kr',
  // kr geographical names
  'busan.kr',
  'chungbuk.kr',
  'chungnam.kr',
  'daegu.kr',
  'daejeon.kr',
  'gangwon.kr',
  'gwangju.kr',
  'gyeongbuk.kr',
  'gyeonggi.kr',
  'gyeongnam.kr',
  'incheon.kr',
  'jeju.kr',
  'jeonbuk.kr',
  'jeonnam.kr',
  'seoul.kr',
  'ulsan.kr',

  // kw : https://www.nic.kw/policies/
  // Confirmed by registry <nic.tech@citra.gov.kw>

  'com.kw',
  'edu.kw',
  'emb.kw',
  'gov.kw',
  'ind.kw',
  'net.kw',
  'org.kw',

  // ky : http://www.icta.ky/da_ky_reg_dom.php
  // Confirmed by registry <kysupport@perimeterusa.com> 2008-06-17

  'edu.ky',
  'gov.ky',
  'com.ky',
  'org.ky',
  'net.ky',

  // kz : https://en.wikipedia.org/wiki/.kz
  // see also: http://www.nic.kz/rules/index.jsp

  'org.kz',
  'edu.kz',
  'net.kz',
  'gov.kz',
  'mil.kz',
  'com.kz',

  // la : https://en.wikipedia.org/wiki/.la
  // Submitted by registry <gavin.brown@nic.la>

  'int.la',
  'net.la',
  'info.la',
  'edu.la',
  'gov.la',
  'per.la',
  'com.la',
  'org.la',

  // lb : https://en.wikipedia.org/wiki/.lb
  // Submitted by registry <randy@psg.com>

  'com.lb',
  'edu.lb',
  'gov.lb',
  'net.lb',
  'org.lb',

  // lc : https://en.wikipedia.org/wiki/.lc
  // see also: http://www.nic.lc/rules.htm

  'com.lc',
  'net.lc',
  'co.lc',
  'org.lc',
  'edu.lc',
  'gov.lc',

  // li : https://en.wikipedia.org/wiki/.li

  // lk : https://www.nic.lk/index.php/domain-registration/lk-domain-naming-structure

  'gov.lk',
  'sch.lk',
  'net.lk',
  'int.lk',
  'com.lk',
  'org.lk',
  'edu.lk',
  'ngo.lk',
  'soc.lk',
  'web.lk',
  'ltd.lk',
  'assn.lk',
  'grp.lk',
  'hotel.lk',
  'ac.lk',

  // lr : http://psg.com/dns/lr/lr.txt
  // Submitted by registry <randy@psg.com>

  'com.lr',
  'edu.lr',
  'gov.lr',
  'org.lr',
  'net.lr',

  // ls : http://www.nic.ls/
  // Confirmed by registry <lsadmin@nic.ls>

  'ac.ls',
  'biz.ls',
  'co.ls',
  'edu.ls',
  'gov.ls',
  'info.ls',
  'net.ls',
  'org.ls',
  'sc.ls',

  // lt : https://en.wikipedia.org/wiki/.lt

  // gov.lt : http://www.gov.lt/index_en.php
  'gov.lt',

  // lu : http://www.dns.lu/en/

  // lv : http://www.nic.lv/DNS/En/generic.php

  'com.lv',
  'edu.lv',
  'gov.lv',
  'org.lv',
  'mil.lv',
  'id.lv',
  'net.lv',
  'asn.lv',
  'conf.lv',

  // ly : http://www.nic.ly/regulations.php

  'com.ly',
  'net.ly',
  'gov.ly',
  'plc.ly',
  'edu.ly',
  'sch.ly',
  'med.ly',
  'org.ly',
  'id.ly',

  // ma : https://en.wikipedia.org/wiki/.ma
  // http://www.anrt.ma/fr/admin/download/upload/file_fr782.pdf

  'co.ma',
  'net.ma',
  'gov.ma',
  'org.ma',
  'ac.ma',
  'press.ma',

  // mc : http://www.nic.mc/

  'tm.mc',
  'asso.mc',

  // md : https://en.wikipedia.org/wiki/.md

  // me : https://en.wikipedia.org/wiki/.me

  'co.me',
  'net.me',
  'org.me',
  'edu.me',
  'ac.me',
  'gov.me',
  'its.me',
  'priv.me',

  // mg : http://nic.mg/nicmg/?page_id=39

  'org.mg',
  'nom.mg',
  'gov.mg',
  'prd.mg',
  'tm.mg',
  'edu.mg',
  'mil.mg',
  'com.mg',
  'co.mg',

  // mh : https://en.wikipedia.org/wiki/.mh

  // mil : https://en.wikipedia.org/wiki/.mil

  // mk : https://en.wikipedia.org/wiki/.mk
  // see also: http://dns.marnet.net.mk/postapka.php

  'com.mk',
  'org.mk',
  'net.mk',
  'edu.mk',
  'gov.mk',
  'inf.mk',
  'name.mk',

  // ml : http://www.gobin.info/domainname/ml-template.doc
  // see also: https://en.wikipedia.org/wiki/.ml

  'com.ml',
  'edu.ml',
  'gouv.ml',
  'gov.ml',
  'net.ml',
  'org.ml',
  'presse.ml',

  // mm : https://en.wikipedia.org/wiki/.mm
  'mm',

  // mn : https://en.wikipedia.org/wiki/.mn

  'gov.mn',
  'edu.mn',
  'org.mn',

  // mo : http://www.monic.net.mo/

  'com.mo',
  'net.mo',
  'org.mo',
  'edu.mo',
  'gov.mo',

  // mobi : https://en.wikipedia.org/wiki/.mobi

  // mp : http://www.dot.mp/
  // Confirmed by registry <dcamacho@saipan.com> 2008-06-17

  // mq : https://en.wikipedia.org/wiki/.mq

  // mr : https://en.wikipedia.org/wiki/.mr

  'gov.mr',

  // ms : http://www.nic.ms/pdf/MS_Domain_Name_Rules.pdf

  'com.ms',
  'edu.ms',
  'gov.ms',
  'net.ms',
  'org.ms',

  // mt : https://www.nic.org.mt/go/policy
  // Submitted by registry <help@nic.org.mt>

  'com.mt',
  'edu.mt',
  'net.mt',
  'org.mt',

  // mu : https://en.wikipedia.org/wiki/.mu

  'com.mu',
  'net.mu',
  'org.mu',
  'gov.mu',
  'ac.mu',
  'co.mu',
  'or.mu',

  // museum : http://about.museum/naming/
  // http://index.museum/

  'academy.museum',
  'agriculture.museum',
  'air.museum',
  'airguard.museum',
  'alabama.museum',
  'alaska.museum',
  'amber.museum',
  'ambulance.museum',
  'american.museum',
  'americana.museum',
  'americanantiques.museum',
  'americanart.museum',
  'amsterdam.museum',
  'and.museum',
  'annefrank.museum',
  'anthro.museum',
  'anthropology.museum',
  'antiques.museum',
  'aquarium.museum',
  'arboretum.museum',
  'archaeological.museum',
  'archaeology.museum',
  'architecture.museum',
  'art.museum',
  'artanddesign.museum',
  'artcenter.museum',
  'artdeco.museum',
  'arteducation.museum',
  'artgallery.museum',
  'arts.museum',
  'artsandcrafts.museum',
  'asmatart.museum',
  'assassination.museum',
  'assisi.museum',
  'association.museum',
  'astronomy.museum',
  'atlanta.museum',
  'austin.museum',
  'australia.museum',
  'automotive.museum',
  'aviation.museum',
  'axis.museum',
  'badajoz.museum',
  'baghdad.museum',
  'bahn.museum',
  'bale.museum',
  'baltimore.museum',
  'barcelona.museum',
  'baseball.museum',
  'basel.museum',
  'baths.museum',
  'bauern.museum',
  'beauxarts.museum',
  'beeldengeluid.museum',
  'bellevue.museum',
  'bergbau.museum',
  'berkeley.museum',
  'berlin.museum',
  'bern.museum',
  'bible.museum',
  'bilbao.museum',
  'bill.museum',
  'birdart.museum',
  'birthplace.museum',
  'bonn.museum',
  'boston.museum',
  'botanical.museum',
  'botanicalgarden.museum',
  'botanicgarden.museum',
  'botany.museum',
  'brandywinevalley.museum',
  'brasil.museum',
  'bristol.museum',
  'british.museum',
  'britishcolumbia.museum',
  'broadcast.museum',
  'brunel.museum',
  'brussel.museum',
  'brussels.museum',
  'bruxelles.museum',
  'building.museum',
  'burghof.museum',
  'bus.museum',
  'bushey.museum',
  'cadaques.museum',
  'california.museum',
  'cambridge.museum',
  'can.museum',
  'canada.museum',
  'capebreton.museum',
  'carrier.museum',
  'cartoonart.museum',
  'casadelamoneda.museum',
  'castle.museum',
  'castres.museum',
  'celtic.museum',
  'center.museum',
  'chattanooga.museum',
  'cheltenham.museum',
  'chesapeakebay.museum',
  'chicago.museum',
  'children.museum',
  'childrens.museum',
  'childrensgarden.museum',
  'chiropractic.museum',
  'chocolate.museum',
  'christiansburg.museum',
  'cincinnati.museum',
  'cinema.museum',
  'circus.museum',
  'civilisation.museum',
  'civilization.museum',
  'civilwar.museum',
  'clinton.museum',
  'clock.museum',
  'coal.museum',
  'coastaldefence.museum',
  'cody.museum',
  'coldwar.museum',
  'collection.museum',
  'colonialwilliamsburg.museum',
  'coloradoplateau.museum',
  'columbia.museum',
  'columbus.museum',
  'communication.museum',
  'communications.museum',
  'community.museum',
  'computer.museum',
  'computerhistory.museum',
  'comunicações.museum',
  'contemporary.museum',
  'contemporaryart.museum',
  'convent.museum',
  'copenhagen.museum',
  'corporation.museum',
  'correios-e-telecomunicações.museum',
  'corvette.museum',
  'costume.museum',
  'countryestate.museum',
  'county.museum',
  'crafts.museum',
  'cranbrook.museum',
  'creation.museum',
  'cultural.museum',
  'culturalcenter.museum',
  'culture.museum',
  'cyber.museum',
  'cymru.museum',
  'dali.museum',
  'dallas.museum',
  'database.museum',
  'ddr.museum',
  'decorativearts.museum',
  'delaware.museum',
  'delmenhorst.museum',
  'denmark.museum',
  'depot.museum',
  'design.museum',
  'detroit.museum',
  'dinosaur.museum',
  'discovery.museum',
  'dolls.museum',
  'donostia.museum',
  'durham.museum',
  'eastafrica.museum',
  'eastcoast.museum',
  'education.museum',
  'educational.museum',
  'egyptian.museum',
  'eisenbahn.museum',
  'elburg.museum',
  'elvendrell.museum',
  'embroidery.museum',
  'encyclopedic.museum',
  'england.museum',
  'entomology.museum',
  'environment.museum',
  'environmentalconservation.museum',
  'epilepsy.museum',
  'essex.museum',
  'estate.museum',
  'ethnology.museum',
  'exeter.museum',
  'exhibition.museum',
  'family.museum',
  'farm.museum',
  'farmequipment.museum',
  'farmers.museum',
  'farmstead.museum',
  'field.museum',
  'figueres.museum',
  'filatelia.museum',
  'film.museum',
  'fineart.museum',
  'finearts.museum',
  'finland.museum',
  'flanders.museum',
  'florida.museum',
  'force.museum',
  'fortmissoula.museum',
  'fortworth.museum',
  'foundation.museum',
  'francaise.museum',
  'frankfurt.museum',
  'franziskaner.museum',
  'freemasonry.museum',
  'freiburg.museum',
  'fribourg.museum',
  'frog.museum',
  'fundacio.museum',
  'furniture.museum',
  'gallery.museum',
  'garden.museum',
  'gateway.museum',
  'geelvinck.museum',
  'gemological.museum',
  'geology.museum',
  'georgia.museum',
  'giessen.museum',
  'glas.museum',
  'glass.museum',
  'gorge.museum',
  'grandrapids.museum',
  'graz.museum',
  'guernsey.museum',
  'halloffame.museum',
  'hamburg.museum',
  'handson.museum',
  'harvestcelebration.museum',
  'hawaii.museum',
  'health.museum',
  'heimatunduhren.museum',
  'hellas.museum',
  'helsinki.museum',
  'hembygdsforbund.museum',
  'heritage.museum',
  'histoire.museum',
  'historical.museum',
  'historicalsociety.museum',
  'historichouses.museum',
  'historisch.museum',
  'historisches.museum',
  'history.museum',
  'historyofscience.museum',
  'horology.museum',
  'house.museum',
  'humanities.museum',
  'illustration.museum',
  'imageandsound.museum',
  'indian.museum',
  'indiana.museum',
  'indianapolis.museum',
  'indianmarket.museum',
  'intelligence.museum',
  'interactive.museum',
  'iraq.museum',
  'iron.museum',
  'isleofman.museum',
  'jamison.museum',
  'jefferson.museum',
  'jerusalem.museum',
  'jewelry.museum',
  'jewish.museum',
  'jewishart.museum',
  'jfk.museum',
  'journalism.museum',
  'judaica.museum',
  'judygarland.museum',
  'juedisches.museum',
  'juif.museum',
  'karate.museum',
  'karikatur.museum',
  'kids.museum',
  'koebenhavn.museum',
  'koeln.museum',
  'kunst.museum',
  'kunstsammlung.museum',
  'kunstunddesign.museum',
  'labor.museum',
  'labour.museum',
  'lajolla.museum',
  'lancashire.museum',
  'landes.museum',
  'lans.museum',
  'läns.museum',
  'larsson.museum',
  'lewismiller.museum',
  'lincoln.museum',
  'linz.museum',
  'living.museum',
  'livinghistory.museum',
  'localhistory.museum',
  'london.museum',
  'losangeles.museum',
  'louvre.museum',
  'loyalist.museum',
  'lucerne.museum',
  'luxembourg.museum',
  'luzern.museum',
  'mad.museum',
  'madrid.museum',
  'mallorca.museum',
  'manchester.museum',
  'mansion.museum',
  'mansions.museum',
  'manx.museum',
  'marburg.museum',
  'maritime.museum',
  'maritimo.museum',
  'maryland.museum',
  'marylhurst.museum',
  'media.museum',
  'medical.museum',
  'medizinhistorisches.museum',
  'meeres.museum',
  'memorial.museum',
  'mesaverde.museum',
  'michigan.museum',
  'midatlantic.museum',
  'military.museum',
  'mill.museum',
  'miners.museum',
  'mining.museum',
  'minnesota.museum',
  'missile.museum',
  'missoula.museum',
  'modern.museum',
  'moma.museum',
  'money.museum',
  'monmouth.museum',
  'monticello.museum',
  'montreal.museum',
  'moscow.museum',
  'motorcycle.museum',
  'muenchen.museum',
  'muenster.museum',
  'mulhouse.museum',
  'muncie.museum',
  'museet.museum',
  'museumcenter.museum',
  'museumvereniging.museum',
  'music.museum',
  'national.museum',
  'nationalfirearms.museum',
  'nationalheritage.museum',
  'nativeamerican.museum',
  'naturalhistory.museum',
  'naturalhistorymuseum.museum',
  'naturalsciences.museum',
  'nature.museum',
  'naturhistorisches.museum',
  'natuurwetenschappen.museum',
  'naumburg.museum',
  'naval.museum',
  'nebraska.museum',
  'neues.museum',
  'newhampshire.museum',
  'newjersey.museum',
  'newmexico.museum',
  'newport.museum',
  'newspaper.museum',
  'newyork.museum',
  'niepce.museum',
  'norfolk.museum',
  'north.museum',
  'nrw.museum',
  'nyc.museum',
  'nyny.museum',
  'oceanographic.museum',
  'oceanographique.museum',
  'omaha.museum',
  'online.museum',
  'ontario.museum',
  'openair.museum',
  'oregon.museum',
  'oregontrail.museum',
  'otago.museum',
  'oxford.museum',
  'pacific.museum',
  'paderborn.museum',
  'palace.museum',
  'paleo.museum',
  'palmsprings.museum',
  'panama.museum',
  'paris.museum',
  'pasadena.museum',
  'pharmacy.museum',
  'philadelphia.museum',
  'philadelphiaarea.museum',
  'philately.museum',
  'phoenix.museum',
  'photography.museum',
  'pilots.museum',
  'pittsburgh.museum',
  'planetarium.museum',
  'plantation.museum',
  'plants.museum',
  'plaza.museum',
  'portal.museum',
  'portland.museum',
  'portlligat.museum',
  'posts-and-telecommunications.museum',
  'preservation.museum',
  'presidio.museum',
  'press.museum',
  'project.museum',
  'public.museum',
  'pubol.museum',
  'quebec.museum',
  'railroad.museum',
  'railway.museum',
  'research.museum',
  'resistance.museum',
  'riodejaneiro.museum',
  'rochester.museum',
  'rockart.museum',
  'roma.museum',
  'russia.museum',
  'saintlouis.museum',
  'salem.museum',
  'salvadordali.museum',
  'salzburg.museum',
  'sandiego.museum',
  'sanfrancisco.museum',
  'santabarbara.museum',
  'santacruz.museum',
  'santafe.museum',
  'saskatchewan.museum',
  'satx.museum',
  'savannahga.museum',
  'schlesisches.museum',
  'schoenbrunn.museum',
  'schokoladen.museum',
  'school.museum',
  'schweiz.museum',
  'science.museum',
  'scienceandhistory.museum',
  'scienceandindustry.museum',
  'sciencecenter.museum',
  'sciencecenters.museum',
  'science-fiction.museum',
  'sciencehistory.museum',
  'sciences.museum',
  'sciencesnaturelles.museum',
  'scotland.museum',
  'seaport.museum',
  'settlement.museum',
  'settlers.museum',
  'shell.museum',
  'sherbrooke.museum',
  'sibenik.museum',
  'silk.museum',
  'ski.museum',
  'skole.museum',
  'society.museum',
  'sologne.museum',
  'soundandvision.museum',
  'southcarolina.museum',
  'southwest.museum',
  'space.museum',
  'spy.museum',
  'square.museum',
  'stadt.museum',
  'stalbans.museum',
  'starnberg.museum',
  'state.museum',
  'stateofdelaware.museum',
  'station.museum',
  'steam.museum',
  'steiermark.museum',
  'stjohn.museum',
  'stockholm.museum',
  'stpetersburg.museum',
  'stuttgart.museum',
  'suisse.museum',
  'surgeonshall.museum',
  'surrey.museum',
  'svizzera.museum',
  'sweden.museum',
  'sydney.museum',
  'tank.museum',
  'tcm.museum',
  'technology.museum',
  'telekommunikation.museum',
  'television.museum',
  'texas.museum',
  'textile.museum',
  'theater.museum',
  'time.museum',
  'timekeeping.museum',
  'topology.museum',
  'torino.museum',
  'touch.museum',
  'town.museum',
  'transport.museum',
  'tree.museum',
  'trolley.museum',
  'trust.museum',
  'trustee.museum',
  'uhren.museum',
  'ulm.museum',
  'undersea.museum',
  'university.museum',
  'usa.museum',
  'usantiques.museum',
  'usarts.museum',
  'uscountryestate.museum',
  'usculture.museum',
  'usdecorativearts.museum',
  'usgarden.museum',
  'ushistory.museum',
  'ushuaia.museum',
  'uslivinghistory.museum',
  'utah.museum',
  'uvic.museum',
  'valley.museum',
  'vantaa.museum',
  'versailles.museum',
  'viking.museum',
  'village.museum',
  'virginia.museum',
  'virtual.museum',
  'virtuel.museum',
  'vlaanderen.museum',
  'volkenkunde.museum',
  'wales.museum',
  'wallonie.museum',
  'war.museum',
  'washingtondc.museum',
  'watchandclock.museum',
  'watch-and-clock.museum',
  'western.museum',
  'westfalen.museum',
  'whaling.museum',
  'wildlife.museum',
  'williamsburg.museum',
  'windmill.museum',
  'workshop.museum',
  'york.museum',
  'yorkshire.museum',
  'yosemite.museum',
  'youth.museum',
  'zoological.museum',
  'zoology.museum',
  'ירושלים.museum',
  'иком.museum',

  // mv : https://en.wikipedia.org/wiki/.mv
  // "mv" included because, contra Wikipedia, google.mv exists.

  'aero.mv',
  'biz.mv',
  'com.mv',
  'coop.mv',
  'edu.mv',
  'gov.mv',
  'info.mv',
  'int.mv',
  'mil.mv',
  'museum.mv',
  'name.mv',
  'net.mv',
  'org.mv',
  'pro.mv',

  // mw : http://www.registrar.mw/

  'ac.mw',
  'biz.mw',
  'co.mw',
  'com.mw',
  'coop.mw',
  'edu.mw',
  'gov.mw',
  'int.mw',
  'museum.mw',
  'net.mw',
  'org.mw',

  // mx : http://www.nic.mx/
  // Submitted by registry <farias@nic.mx>

  'com.mx',
  'org.mx',
  'gob.mx',
  'edu.mx',
  'net.mx',

  // my : http://www.mynic.my/
  // Available strings: https://mynic.my/resources/domains/buying-a-domain/

  'biz.my',
  'com.my',
  'edu.my',
  'gov.my',
  'mil.my',
  'name.my',
  'net.my',
  'org.my',

  // mz : http://www.uem.mz/
  // Submitted by registry <antonio@uem.mz>

  'ac.mz',
  'adv.mz',
  'co.mz',
  'edu.mz',
  'gov.mz',
  'mil.mz',
  'net.mz',
  'org.mz',

  // na : http://www.na-nic.com.na/
  // http://www.info.na/domain/

  'info.na',
  'pro.na',
  'name.na',
  'school.na',
  'or.na',
  'dr.na',
  'us.na',
  'mx.na',
  'ca.na',
  'in.na',
  'cc.na',
  'tv.na',
  'ws.na',
  'mobi.na',
  'co.na',
  'com.na',
  'org.na',

  // name : has 2nd-level tlds, but there's no list of them

  // nc : http://www.cctld.nc/

  'asso.nc',
  'nom.nc',

  // ne : https://en.wikipedia.org/wiki/.ne

  // net : https://en.wikipedia.org/wiki/.net

  // nf : https://en.wikipedia.org/wiki/.nf

  'com.nf',
  'net.nf',
  'per.nf',
  'rec.nf',
  'web.nf',
  'arts.nf',
  'firm.nf',
  'info.nf',
  'other.nf',
  'store.nf',

  // ng : http://www.nira.org.ng/index.php/join-us/register-ng-domain/189-nira-slds

  'com.ng',
  'edu.ng',
  'gov.ng',
  'i.ng',
  'mil.ng',
  'mobi.ng',
  'name.ng',
  'net.ng',
  'org.ng',
  'sch.ng',

  // ni : http://www.nic.ni/

  'ac.ni',
  'biz.ni',
  'co.ni',
  'com.ni',
  'edu.ni',
  'gob.ni',
  'in.ni',
  'info.ni',
  'int.ni',
  'mil.ni',
  'net.ni',
  'nom.ni',
  'org.ni',
  'web.ni',

  // nl : https://en.wikipedia.org/wiki/.nl
  //      https://www.sidn.nl/
  //      ccTLD for the Netherlands

  // no : https://www.norid.no/en/om-domenenavn/regelverk-for-no/
  // Norid geographical second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-b/
  // Norid category second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-c/
  // Norid category second-level domains managed by parties other than Norid : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-d/
  // RSS feed: https://teknisk.norid.no/en/feed/

  // Norid category second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-c/
  'fhs.no',
  'vgs.no',
  'fylkesbibl.no',
  'folkebibl.no',
  'museum.no',
  'idrett.no',
  'priv.no',
  // Norid category second-level domains managed by parties other than Norid : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-d/
  'mil.no',
  'stat.no',
  'dep.no',
  'kommune.no',
  'herad.no',
  // Norid geographical second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-b/
  // counties
  'aa.no',
  'ah.no',
  'bu.no',
  'fm.no',
  'hl.no',
  'hm.no',
  'jan-mayen.no',
  'mr.no',
  'nl.no',
  'nt.no',
  'of.no',
  'ol.no',
  'oslo.no',
  'rl.no',
  'sf.no',
  'st.no',
  'svalbard.no',
  'tm.no',
  'tr.no',
  'va.no',
  'vf.no',
  // primary and lower secondary schools per county
  'gs.aa.no',
  'gs.ah.no',
  'gs.bu.no',
  'gs.fm.no',
  'gs.hl.no',
  'gs.hm.no',
  'gs.jan-mayen.no',
  'gs.mr.no',
  'gs.nl.no',
  'gs.nt.no',
  'gs.of.no',
  'gs.ol.no',
  'gs.oslo.no',
  'gs.rl.no',
  'gs.sf.no',
  'gs.st.no',
  'gs.svalbard.no',
  'gs.tm.no',
  'gs.tr.no',
  'gs.va.no',
  'gs.vf.no',
  // cities
  'akrehamn.no',
  'åkrehamn.no',
  'algard.no',
  'ålgård.no',
  'arna.no',
  'brumunddal.no',
  'bryne.no',
  'bronnoysund.no',
  'brønnøysund.no',
  'drobak.no',
  'drøbak.no',
  'egersund.no',
  'fetsund.no',
  'floro.no',
  'florø.no',
  'fredrikstad.no',
  'hokksund.no',
  'honefoss.no',
  'hønefoss.no',
  'jessheim.no',
  'jorpeland.no',
  'jørpeland.no',
  'kirkenes.no',
  'kopervik.no',
  'krokstadelva.no',
  'langevag.no',
  'langevåg.no',
  'leirvik.no',
  'mjondalen.no',
  'mjøndalen.no',
  'mo-i-rana.no',
  'mosjoen.no',
  'mosjøen.no',
  'nesoddtangen.no',
  'orkanger.no',
  'osoyro.no',
  'osøyro.no',
  'raholt.no',
  'råholt.no',
  'sandnessjoen.no',
  'sandnessjøen.no',
  'skedsmokorset.no',
  'slattum.no',
  'spjelkavik.no',
  'stathelle.no',
  'stavern.no',
  'stjordalshalsen.no',
  'stjørdalshalsen.no',
  'tananger.no',
  'tranby.no',
  'vossevangen.no',
  // communities
  'afjord.no',
  'åfjord.no',
  'agdenes.no',
  'al.no',
  'ål.no',
  'alesund.no',
  'ålesund.no',
  'alstahaug.no',
  'alta.no',
  'áltá.no',
  'alaheadju.no',
  'álaheadju.no',
  'alvdal.no',
  'amli.no',
  'åmli.no',
  'amot.no',
  'åmot.no',
  'andebu.no',
  'andoy.no',
  'andøy.no',
  'andasuolo.no',
  'ardal.no',
  'årdal.no',
  'aremark.no',
  'arendal.no',
  'ås.no',
  'aseral.no',
  'åseral.no',
  'asker.no',
  'askim.no',
  'askvoll.no',
  'askoy.no',
  'askøy.no',
  'asnes.no',
  'åsnes.no',
  'audnedaln.no',
  'aukra.no',
  'aure.no',
  'aurland.no',
  'aurskog-holand.no',
  'aurskog-høland.no',
  'austevoll.no',
  'austrheim.no',
  'averoy.no',
  'averøy.no',
  'balestrand.no',
  'ballangen.no',
  'balat.no',
  'bálát.no',
  'balsfjord.no',
  'bahccavuotna.no',
  'báhccavuotna.no',
  'bamble.no',
  'bardu.no',
  'beardu.no',
  'beiarn.no',
  'bajddar.no',
  'bájddar.no',
  'baidar.no',
  'báidár.no',
  'berg.no',
  'bergen.no',
  'berlevag.no',
  'berlevåg.no',
  'bearalvahki.no',
  'bearalváhki.no',
  'bindal.no',
  'birkenes.no',
  'bjarkoy.no',
  'bjarkøy.no',
  'bjerkreim.no',
  'bjugn.no',
  'bodo.no',
  'bodø.no',
  'badaddja.no',
  'bådåddjå.no',
  'budejju.no',
  'bokn.no',
  'bremanger.no',
  'bronnoy.no',
  'brønnøy.no',
  'bygland.no',
  'bykle.no',
  'barum.no',
  'bærum.no',
  'bo.telemark.no',
  'bø.telemark.no',
  'bo.nordland.no',
  'bø.nordland.no',
  'bievat.no',
  'bievát.no',
  'bomlo.no',
  'bømlo.no',
  'batsfjord.no',
  'båtsfjord.no',
  'bahcavuotna.no',
  'báhcavuotna.no',
  'dovre.no',
  'drammen.no',
  'drangedal.no',
  'dyroy.no',
  'dyrøy.no',
  'donna.no',
  'dønna.no',
  'eid.no',
  'eidfjord.no',
  'eidsberg.no',
  'eidskog.no',
  'eidsvoll.no',
  'eigersund.no',
  'elverum.no',
  'enebakk.no',
  'engerdal.no',
  'etne.no',
  'etnedal.no',
  'evenes.no',
  'evenassi.no',
  'evenášši.no',
  'evje-og-hornnes.no',
  'farsund.no',
  'fauske.no',
  'fuossko.no',
  'fuoisku.no',
  'fedje.no',
  'fet.no',
  'finnoy.no',
  'finnøy.no',
  'fitjar.no',
  'fjaler.no',
  'fjell.no',
  'flakstad.no',
  'flatanger.no',
  'flekkefjord.no',
  'flesberg.no',
  'flora.no',
  'fla.no',
  'flå.no',
  'folldal.no',
  'forsand.no',
  'fosnes.no',
  'frei.no',
  'frogn.no',
  'froland.no',
  'frosta.no',
  'frana.no',
  'fræna.no',
  'froya.no',
  'frøya.no',
  'fusa.no',
  'fyresdal.no',
  'forde.no',
  'førde.no',
  'gamvik.no',
  'gangaviika.no',
  'gáŋgaviika.no',
  'gaular.no',
  'gausdal.no',
  'gildeskal.no',
  'gildeskål.no',
  'giske.no',
  'gjemnes.no',
  'gjerdrum.no',
  'gjerstad.no',
  'gjesdal.no',
  'gjovik.no',
  'gjøvik.no',
  'gloppen.no',
  'gol.no',
  'gran.no',
  'grane.no',
  'granvin.no',
  'gratangen.no',
  'grimstad.no',
  'grong.no',
  'kraanghke.no',
  'kråanghke.no',
  'grue.no',
  'gulen.no',
  'hadsel.no',
  'halden.no',
  'halsa.no',
  'hamar.no',
  'hamaroy.no',
  'habmer.no',
  'hábmer.no',
  'hapmir.no',
  'hápmir.no',
  'hammerfest.no',
  'hammarfeasta.no',
  'hámmárfeasta.no',
  'haram.no',
  'hareid.no',
  'harstad.no',
  'hasvik.no',
  'aknoluokta.no',
  'ákŋoluokta.no',
  'hattfjelldal.no',
  'aarborte.no',
  'haugesund.no',
  'hemne.no',
  'hemnes.no',
  'hemsedal.no',
  'heroy.more-og-romsdal.no',
  'herøy.møre-og-romsdal.no',
  'heroy.nordland.no',
  'herøy.nordland.no',
  'hitra.no',
  'hjartdal.no',
  'hjelmeland.no',
  'hobol.no',
  'hobøl.no',
  'hof.no',
  'hol.no',
  'hole.no',
  'holmestrand.no',
  'holtalen.no',
  'holtålen.no',
  'hornindal.no',
  'horten.no',
  'hurdal.no',
  'hurum.no',
  'hvaler.no',
  'hyllestad.no',
  'hagebostad.no',
  'hægebostad.no',
  'hoyanger.no',
  'høyanger.no',
  'hoylandet.no',
  'høylandet.no',
  'ha.no',
  'hå.no',
  'ibestad.no',
  'inderoy.no',
  'inderøy.no',
  'iveland.no',
  'jevnaker.no',
  'jondal.no',
  'jolster.no',
  'jølster.no',
  'karasjok.no',
  'karasjohka.no',
  'kárášjohka.no',
  'karlsoy.no',
  'galsa.no',
  'gálsá.no',
  'karmoy.no',
  'karmøy.no',
  'kautokeino.no',
  'guovdageaidnu.no',
  'klepp.no',
  'klabu.no',
  'klæbu.no',
  'kongsberg.no',
  'kongsvinger.no',
  'kragero.no',
  'kragerø.no',
  'kristiansand.no',
  'kristiansund.no',
  'krodsherad.no',
  'krødsherad.no',
  'kvalsund.no',
  'rahkkeravju.no',
  'ráhkkerávju.no',
  'kvam.no',
  'kvinesdal.no',
  'kvinnherad.no',
  'kviteseid.no',
  'kvitsoy.no',
  'kvitsøy.no',
  'kvafjord.no',
  'kvæfjord.no',
  'giehtavuoatna.no',
  'kvanangen.no',
  'kvænangen.no',
  'navuotna.no',
  'návuotna.no',
  'kafjord.no',
  'kåfjord.no',
  'gaivuotna.no',
  'gáivuotna.no',
  'larvik.no',
  'lavangen.no',
  'lavagis.no',
  'loabat.no',
  'loabát.no',
  'lebesby.no',
  'davvesiida.no',
  'leikanger.no',
  'leirfjord.no',
  'leka.no',
  'leksvik.no',
  'lenvik.no',
  'leangaviika.no',
  'leaŋgaviika.no',
  'lesja.no',
  'levanger.no',
  'lier.no',
  'lierne.no',
  'lillehammer.no',
  'lillesand.no',
  'lindesnes.no',
  'lindas.no',
  'lindås.no',
  'lom.no',
  'loppa.no',
  'lahppi.no',
  'láhppi.no',
  'lund.no',
  'lunner.no',
  'luroy.no',
  'lurøy.no',
  'luster.no',
  'lyngdal.no',
  'lyngen.no',
  'ivgu.no',
  'lardal.no',
  'lerdal.no',
  'lærdal.no',
  'lodingen.no',
  'lødingen.no',
  'lorenskog.no',
  'lørenskog.no',
  'loten.no',
  'løten.no',
  'malvik.no',
  'masoy.no',
  'måsøy.no',
  'muosat.no',
  'muosát.no',
  'mandal.no',
  'marker.no',
  'marnardal.no',
  'masfjorden.no',
  'meland.no',
  'meldal.no',
  'melhus.no',
  'meloy.no',
  'meløy.no',
  'meraker.no',
  'meråker.no',
  'moareke.no',
  'moåreke.no',
  'midsund.no',
  'midtre-gauldal.no',
  'modalen.no',
  'modum.no',
  'molde.no',
  'moskenes.no',
  'moss.no',
  'mosvik.no',
  'malselv.no',
  'målselv.no',
  'malatvuopmi.no',
  'málatvuopmi.no',
  'namdalseid.no',
  'aejrie.no',
  'namsos.no',
  'namsskogan.no',
  'naamesjevuemie.no',
  'nååmesjevuemie.no',
  'laakesvuemie.no',
  'nannestad.no',
  'narvik.no',
  'narviika.no',
  'naustdal.no',
  'nedre-eiker.no',
  'nes.akershus.no',
  'nes.buskerud.no',
  'nesna.no',
  'nesodden.no',
  'nesseby.no',
  'unjarga.no',
  'unjárga.no',
  'nesset.no',
  'nissedal.no',
  'nittedal.no',
  'nord-aurdal.no',
  'nord-fron.no',
  'nord-odal.no',
  'norddal.no',
  'nordkapp.no',
  'davvenjarga.no',
  'davvenjárga.no',
  'nordre-land.no',
  'nordreisa.no',
  'raisa.no',
  'ráisa.no',
  'nore-og-uvdal.no',
  'notodden.no',
  'naroy.no',
  'nærøy.no',
  'notteroy.no',
  'nøtterøy.no',
  'odda.no',
  'oksnes.no',
  'øksnes.no',
  'oppdal.no',
  'oppegard.no',
  'oppegård.no',
  'orkdal.no',
  'orland.no',
  'ørland.no',
  'orskog.no',
  'ørskog.no',
  'orsta.no',
  'ørsta.no',
  'os.hedmark.no',
  'os.hordaland.no',
  'osen.no',
  'osteroy.no',
  'osterøy.no',
  'ostre-toten.no',
  'østre-toten.no',
  'overhalla.no',
  'ovre-eiker.no',
  'øvre-eiker.no',
  'oyer.no',
  'øyer.no',
  'oygarden.no',
  'øygarden.no',
  'oystre-slidre.no',
  'øystre-slidre.no',
  'porsanger.no',
  'porsangu.no',
  'porsáŋgu.no',
  'porsgrunn.no',
  'radoy.no',
  'radøy.no',
  'rakkestad.no',
  'rana.no',
  'ruovat.no',
  'randaberg.no',
  'rauma.no',
  'rendalen.no',
  'rennebu.no',
  'rennesoy.no',
  'rennesøy.no',
  'rindal.no',
  'ringebu.no',
  'ringerike.no',
  'ringsaker.no',
  'rissa.no',
  'risor.no',
  'risør.no',
  'roan.no',
  'rollag.no',
  'rygge.no',
  'ralingen.no',
  'rælingen.no',
  'rodoy.no',
  'rødøy.no',
  'romskog.no',
  'rømskog.no',
  'roros.no',
  'røros.no',
  'rost.no',
  'røst.no',
  'royken.no',
  'røyken.no',
  'royrvik.no',
  'røyrvik.no',
  'rade.no',
  'råde.no',
  'salangen.no',
  'siellak.no',
  'saltdal.no',
  'salat.no',
  'sálát.no',
  'sálat.no',
  'samnanger.no',
  'sande.more-og-romsdal.no',
  'sande.møre-og-romsdal.no',
  'sande.vestfold.no',
  'sandefjord.no',
  'sandnes.no',
  'sandoy.no',
  'sandøy.no',
  'sarpsborg.no',
  'sauda.no',
  'sauherad.no',
  'sel.no',
  'selbu.no',
  'selje.no',
  'seljord.no',
  'sigdal.no',
  'siljan.no',
  'sirdal.no',
  'skaun.no',
  'skedsmo.no',
  'ski.no',
  'skien.no',
  'skiptvet.no',
  'skjervoy.no',
  'skjervøy.no',
  'skierva.no',
  'skiervá.no',
  'skjak.no',
  'skjåk.no',
  'skodje.no',
  'skanland.no',
  'skånland.no',
  'skanit.no',
  'skánit.no',
  'smola.no',
  'smøla.no',
  'snillfjord.no',
  'snasa.no',
  'snåsa.no',
  'snoasa.no',
  'snaase.no',
  'snåase.no',
  'sogndal.no',
  'sokndal.no',
  'sola.no',
  'solund.no',
  'songdalen.no',
  'sortland.no',
  'spydeberg.no',
  'stange.no',
  'stavanger.no',
  'steigen.no',
  'steinkjer.no',
  'stjordal.no',
  'stjørdal.no',
  'stokke.no',
  'stor-elvdal.no',
  'stord.no',
  'stordal.no',
  'storfjord.no',
  'omasvuotna.no',
  'strand.no',
  'stranda.no',
  'stryn.no',
  'sula.no',
  'suldal.no',
  'sund.no',
  'sunndal.no',
  'surnadal.no',
  'sveio.no',
  'svelvik.no',
  'sykkylven.no',
  'sogne.no',
  'søgne.no',
  'somna.no',
  'sømna.no',
  'sondre-land.no',
  'søndre-land.no',
  'sor-aurdal.no',
  'sør-aurdal.no',
  'sor-fron.no',
  'sør-fron.no',
  'sor-odal.no',
  'sør-odal.no',
  'sor-varanger.no',
  'sør-varanger.no',
  'matta-varjjat.no',
  'mátta-várjjat.no',
  'sorfold.no',
  'sørfold.no',
  'sorreisa.no',
  'sørreisa.no',
  'sorum.no',
  'sørum.no',
  'tana.no',
  'deatnu.no',
  'time.no',
  'tingvoll.no',
  'tinn.no',
  'tjeldsund.no',
  'dielddanuorri.no',
  'tjome.no',
  'tjøme.no',
  'tokke.no',
  'tolga.no',
  'torsken.no',
  'tranoy.no',
  'tranøy.no',
  'tromso.no',
  'tromsø.no',
  'tromsa.no',
  'romsa.no',
  'trondheim.no',
  'troandin.no',
  'trysil.no',
  'trana.no',
  'træna.no',
  'trogstad.no',
  'trøgstad.no',
  'tvedestrand.no',
  'tydal.no',
  'tynset.no',
  'tysfjord.no',
  'divtasvuodna.no',
  'divttasvuotna.no',
  'tysnes.no',
  'tysvar.no',
  'tysvær.no',
  'tonsberg.no',
  'tønsberg.no',
  'ullensaker.no',
  'ullensvang.no',
  'ulvik.no',
  'utsira.no',
  'vadso.no',
  'vadsø.no',
  'cahcesuolo.no',
  'čáhcesuolo.no',
  'vaksdal.no',
  'valle.no',
  'vang.no',
  'vanylven.no',
  'vardo.no',
  'vardø.no',
  'varggat.no',
  'várggát.no',
  'vefsn.no',
  'vaapste.no',
  'vega.no',
  'vegarshei.no',
  'vegårshei.no',
  'vennesla.no',
  'verdal.no',
  'verran.no',
  'vestby.no',
  'vestnes.no',
  'vestre-slidre.no',
  'vestre-toten.no',
  'vestvagoy.no',
  'vestvågøy.no',
  'vevelstad.no',
  'vik.no',
  'vikna.no',
  'vindafjord.no',
  'volda.no',
  'voss.no',
  'varoy.no',
  'værøy.no',
  'vagan.no',
  'vågan.no',
  'voagat.no',
  'vagsoy.no',
  'vågsøy.no',
  'vaga.no',
  'vågå.no',
  'valer.ostfold.no',
  'våler.østfold.no',
  'valer.hedmark.no',
  'våler.hedmark.no',

  // np : http://www.mos.com.np/register.html
  'np',

  // nr : http://cenpac.net.nr/dns/index.html
  // Submitted by registry <technician@cenpac.net.nr>

  'biz.nr',
  'info.nr',
  'gov.nr',
  'edu.nr',
  'org.nr',
  'net.nr',
  'com.nr',

  // nu : https://en.wikipedia.org/wiki/.nu

  // nz : https://en.wikipedia.org/wiki/.nz
  // Submitted by registry <jay@nzrs.net.nz>

  'ac.nz',
  'co.nz',
  'cri.nz',
  'geek.nz',
  'gen.nz',
  'govt.nz',
  'health.nz',
  'iwi.nz',
  'kiwi.nz',
  'maori.nz',
  'mil.nz',
  'māori.nz',
  'net.nz',
  'org.nz',
  'parliament.nz',
  'school.nz',

  // om : https://en.wikipedia.org/wiki/.om

  'co.om',
  'com.om',
  'edu.om',
  'gov.om',
  'med.om',
  'museum.om',
  'net.om',
  'org.om',
  'pro.om',

  // onion : https://tools.ietf.org/html/rfc7686

  // org : https://en.wikipedia.org/wiki/.org

  // pa : http://www.nic.pa/
  // Some additional second level "domains" resolve directly as hostnames, such as
  // pannet.pa, so we add a rule for "pa".

  'ac.pa',
  'gob.pa',
  'com.pa',
  'org.pa',
  'sld.pa',
  'edu.pa',
  'net.pa',
  'ing.pa',
  'abo.pa',
  'med.pa',
  'nom.pa',

  // pe : https://www.nic.pe/InformeFinalComision.pdf

  'edu.pe',
  'gob.pe',
  'nom.pe',
  'mil.pe',
  'org.pe',
  'com.pe',
  'net.pe',

  // pf : http://www.gobin.info/domainname/formulaire-pf.pdf

  'com.pf',
  'org.pf',
  'edu.pf',

  // pg : https://en.wikipedia.org/wiki/.pg
  'pg',

  // ph : http://www.domains.ph/FAQ2.asp
  // Submitted by registry <jed@email.com.ph>

  'com.ph',
  'net.ph',
  'org.ph',
  'gov.ph',
  'edu.ph',
  'ngo.ph',
  'mil.ph',
  'i.ph',

  // pk : http://pk5.pknic.net.pk/pk5/msgNamepk.PK

  'com.pk',
  'net.pk',
  'edu.pk',
  'org.pk',
  'fam.pk',
  'biz.pk',
  'web.pk',
  'gov.pk',
  'gob.pk',
  'gok.pk',
  'gon.pk',
  'gop.pk',
  'gos.pk',
  'info.pk',

  // pl http://www.dns.pl/english/index.html
  // Submitted by registry

  'com.pl',
  'net.pl',
  'org.pl',
  // pl functional domains (http://www.dns.pl/english/index.html)
  'aid.pl',
  'agro.pl',
  'atm.pl',
  'auto.pl',
  'biz.pl',
  'edu.pl',
  'gmina.pl',
  'gsm.pl',
  'info.pl',
  'mail.pl',
  'miasta.pl',
  'media.pl',
  'mil.pl',
  'nieruchomosci.pl',
  'nom.pl',
  'pc.pl',
  'powiat.pl',
  'priv.pl',
  'realestate.pl',
  'rel.pl',
  'sex.pl',
  'shop.pl',
  'sklep.pl',
  'sos.pl',
  'szkola.pl',
  'targi.pl',
  'tm.pl',
  'tourism.pl',
  'travel.pl',
  'turystyka.pl',
  // Government domains
  'gov.pl',
  'ap.gov.pl',
  'ic.gov.pl',
  'is.gov.pl',
  'us.gov.pl',
  'kmpsp.gov.pl',
  'kppsp.gov.pl',
  'kwpsp.gov.pl',
  'psp.gov.pl',
  'wskr.gov.pl',
  'kwp.gov.pl',
  'mw.gov.pl',
  'ug.gov.pl',
  'um.gov.pl',
  'umig.gov.pl',
  'ugim.gov.pl',
  'upow.gov.pl',
  'uw.gov.pl',
  'starostwo.gov.pl',
  'pa.gov.pl',
  'po.gov.pl',
  'psse.gov.pl',
  'pup.gov.pl',
  'rzgw.gov.pl',
  'sa.gov.pl',
  'so.gov.pl',
  'sr.gov.pl',
  'wsa.gov.pl',
  'sko.gov.pl',
  'uzs.gov.pl',
  'wiih.gov.pl',
  'winb.gov.pl',
  'pinb.gov.pl',
  'wios.gov.pl',
  'witd.gov.pl',
  'wzmiuw.gov.pl',
  'piw.gov.pl',
  'wiw.gov.pl',
  'griw.gov.pl',
  'wif.gov.pl',
  'oum.gov.pl',
  'sdn.gov.pl',
  'zp.gov.pl',
  'uppo.gov.pl',
  'mup.gov.pl',
  'wuoz.gov.pl',
  'konsulat.gov.pl',
  'oirm.gov.pl',
  // pl regional domains (http://www.dns.pl/english/index.html)
  'augustow.pl',
  'babia-gora.pl',
  'bedzin.pl',
  'beskidy.pl',
  'bialowieza.pl',
  'bialystok.pl',
  'bielawa.pl',
  'bieszczady.pl',
  'boleslawiec.pl',
  'bydgoszcz.pl',
  'bytom.pl',
  'cieszyn.pl',
  'czeladz.pl',
  'czest.pl',
  'dlugoleka.pl',
  'elblag.pl',
  'elk.pl',
  'glogow.pl',
  'gniezno.pl',
  'gorlice.pl',
  'grajewo.pl',
  'ilawa.pl',
  'jaworzno.pl',
  'jelenia-gora.pl',
  'jgora.pl',
  'kalisz.pl',
  'kazimierz-dolny.pl',
  'karpacz.pl',
  'kartuzy.pl',
  'kaszuby.pl',
  'katowice.pl',
  'kepno.pl',
  'ketrzyn.pl',
  'klodzko.pl',
  'kobierzyce.pl',
  'kolobrzeg.pl',
  'konin.pl',
  'konskowola.pl',
  'kutno.pl',
  'lapy.pl',
  'lebork.pl',
  'legnica.pl',
  'lezajsk.pl',
  'limanowa.pl',
  'lomza.pl',
  'lowicz.pl',
  'lubin.pl',
  'lukow.pl',
  'malbork.pl',
  'malopolska.pl',
  'mazowsze.pl',
  'mazury.pl',
  'mielec.pl',
  'mielno.pl',
  'mragowo.pl',
  'naklo.pl',
  'nowaruda.pl',
  'nysa.pl',
  'olawa.pl',
  'olecko.pl',
  'olkusz.pl',
  'olsztyn.pl',
  'opoczno.pl',
  'opole.pl',
  'ostroda.pl',
  'ostroleka.pl',
  'ostrowiec.pl',
  'ostrowwlkp.pl',
  'pila.pl',
  'pisz.pl',
  'podhale.pl',
  'podlasie.pl',
  'polkowice.pl',
  'pomorze.pl',
  'pomorskie.pl',
  'prochowice.pl',
  'pruszkow.pl',
  'przeworsk.pl',
  'pulawy.pl',
  'radom.pl',
  'rawa-maz.pl',
  'rybnik.pl',
  'rzeszow.pl',
  'sanok.pl',
  'sejny.pl',
  'slask.pl',
  'slupsk.pl',
  'sosnowiec.pl',
  'stalowa-wola.pl',
  'skoczow.pl',
  'starachowice.pl',
  'stargard.pl',
  'suwalki.pl',
  'swidnica.pl',
  'swiebodzin.pl',
  'swinoujscie.pl',
  'szczecin.pl',
  'szczytno.pl',
  'tarnobrzeg.pl',
  'tgory.pl',
  'turek.pl',
  'tychy.pl',
  'ustka.pl',
  'walbrzych.pl',
  'warmia.pl',
  'warszawa.pl',
  'waw.pl',
  'wegrow.pl',
  'wielun.pl',
  'wlocl.pl',
  'wloclawek.pl',
  'wodzislaw.pl',
  'wolomin.pl',
  'wroclaw.pl',
  'zachpomor.pl',
  'zagan.pl',
  'zarow.pl',
  'zgora.pl',
  'zgorzelec.pl',

  // pm : http://www.afnic.fr/medias/documents/AFNIC-naming-policy2012.pdf

  // pn : http://www.government.pn/PnRegistry/policies.htm

  'gov.pn',
  'co.pn',
  'org.pn',
  'edu.pn',
  'net.pn',

  // post : https://en.wikipedia.org/wiki/.post

  // pr : http://www.nic.pr/index.asp?f=1

  'com.pr',
  'net.pr',
  'org.pr',
  'gov.pr',
  'edu.pr',
  'isla.pr',
  'pro.pr',
  'biz.pr',
  'info.pr',
  'name.pr',
  // these aren't mentioned on nic.pr, but on https://en.wikipedia.org/wiki/.pr
  'est.pr',
  'prof.pr',
  'ac.pr',

  // pro : http://registry.pro/get-pro

  'aaa.pro',
  'aca.pro',
  'acct.pro',
  'avocat.pro',
  'bar.pro',
  'cpa.pro',
  'eng.pro',
  'jur.pro',
  'law.pro',
  'med.pro',
  'recht.pro',

  // ps : https://en.wikipedia.org/wiki/.ps
  // http://www.nic.ps/registration/policy.html#reg

  'edu.ps',
  'gov.ps',
  'sec.ps',
  'plo.ps',
  'com.ps',
  'org.ps',
  'net.ps',

  // pt : https://www.dns.pt/en/domain/pt-terms-and-conditions-registration-rules/

  'net.pt',
  'gov.pt',
  'org.pt',
  'edu.pt',
  'int.pt',
  'publ.pt',
  'com.pt',
  'nome.pt',

  // pw : https://en.wikipedia.org/wiki/.pw

  'co.pw',
  'ne.pw',
  'or.pw',
  'ed.pw',
  'go.pw',
  'belau.pw',

  // py : http://www.nic.py/pautas.html#seccion_9
  // Submitted by registry

  'com.py',
  'coop.py',
  'edu.py',
  'gov.py',
  'mil.py',
  'net.py',
  'org.py',

  // qa : http://domains.qa/en/

  'com.qa',
  'edu.qa',
  'gov.qa',
  'mil.qa',
  'name.qa',
  'net.qa',
  'org.qa',
  'sch.qa',

  // re : http://www.afnic.re/obtenir/chartes/nommage-re/annexe-descriptifs

  'asso.re',
  'com.re',
  'nom.re',

  // ro : http://www.rotld.ro/

  'arts.ro',
  'com.ro',
  'firm.ro',
  'info.ro',
  'nom.ro',
  'nt.ro',
  'org.ro',
  'rec.ro',
  'store.ro',
  'tm.ro',
  'www.ro',

  // rs : https://www.rnids.rs/en/domains/national-domains

  'ac.rs',
  'co.rs',
  'edu.rs',
  'gov.rs',
  'in.rs',
  'org.rs',

  // ru : https://cctld.ru/files/pdf/docs/en/rules_ru-rf.pdf
  // Submitted by George Georgievsky <gug@cctld.ru>

  // rw : https://www.ricta.org.rw/sites/default/files/resources/registry_registrar_contract_0.pdf

  'ac.rw',
  'co.rw',
  'coop.rw',
  'gov.rw',
  'mil.rw',
  'net.rw',
  'org.rw',

  // sa : http://www.nic.net.sa/

  'com.sa',
  'net.sa',
  'org.sa',
  'gov.sa',
  'med.sa',
  'pub.sa',
  'edu.sa',
  'sch.sa',

  // sb : http://www.sbnic.net.sb/
  // Submitted by registry <lee.humphries@telekom.com.sb>

  'com.sb',
  'edu.sb',
  'gov.sb',
  'net.sb',
  'org.sb',

  // sc : http://www.nic.sc/

  'com.sc',
  'gov.sc',
  'net.sc',
  'org.sc',
  'edu.sc',

  // sd : http://www.isoc.sd/sudanic.isoc.sd/billing_pricing.htm
  // Submitted by registry <admin@isoc.sd>

  'com.sd',
  'net.sd',
  'org.sd',
  'edu.sd',
  'med.sd',
  'tv.sd',
  'gov.sd',
  'info.sd',

  // se : https://en.wikipedia.org/wiki/.se
  // Submitted by registry <patrik.wallstrom@iis.se>

  'a.se',
  'ac.se',
  'b.se',
  'bd.se',
  'brand.se',
  'c.se',
  'd.se',
  'e.se',
  'f.se',
  'fh.se',
  'fhsk.se',
  'fhv.se',
  'g.se',
  'h.se',
  'i.se',
  'k.se',
  'komforb.se',
  'kommunalforbund.se',
  'komvux.se',
  'l.se',
  'lanbib.se',
  'm.se',
  'n.se',
  'naturbruksgymn.se',
  'o.se',
  'org.se',
  'p.se',
  'parti.se',
  'pp.se',
  'press.se',
  'r.se',
  's.se',
  't.se',
  'tm.se',
  'u.se',
  'w.se',
  'x.se',
  'y.se',
  'z.se',

  // sg : http://www.nic.net.sg/page/registration-policies-procedures-and-guidelines

  'com.sg',
  'net.sg',
  'org.sg',
  'gov.sg',
  'edu.sg',
  'per.sg',

  // sh : http://www.nic.sh/registrar.html

  'com.sh',
  'net.sh',
  'gov.sh',
  'org.sh',
  'mil.sh',

  // si : https://en.wikipedia.org/wiki/.si

  // sj : No registrations at this time.
  // Submitted by registry <jarle@uninett.no>

  // sk : https://en.wikipedia.org/wiki/.sk
  // list of 2nd level domains ?

  // sl : http://www.nic.sl
  // Submitted by registry <adam@neoip.com>

  'com.sl',
  'net.sl',
  'edu.sl',
  'gov.sl',
  'org.sl',

  // sm : https://en.wikipedia.org/wiki/.sm

  // sn : https://en.wikipedia.org/wiki/.sn

  'art.sn',
  'com.sn',
  'edu.sn',
  'gouv.sn',
  'org.sn',
  'perso.sn',
  'univ.sn',

  // so : http://sonic.so/policies/

  'com.so',
  'edu.so',
  'gov.so',
  'me.so',
  'net.so',
  'org.so',

  // sr : https://en.wikipedia.org/wiki/.sr

  // ss : https://registry.nic.ss/
  // Submitted by registry <technical@nic.ss>

  'biz.ss',
  'com.ss',
  'edu.ss',
  'gov.ss',
  'me.ss',
  'net.ss',
  'org.ss',
  'sch.ss',

  // st : http://www.nic.st/html/policyrules/

  'co.st',
  'com.st',
  'consulado.st',
  'edu.st',
  'embaixada.st',
  'mil.st',
  'net.st',
  'org.st',
  'principe.st',
  'saotome.st',
  'store.st',

  // su : https://en.wikipedia.org/wiki/.su

  // sv : http://www.svnet.org.sv/niveldos.pdf

  'com.sv',
  'edu.sv',
  'gob.sv',
  'org.sv',
  'red.sv',

  // sx : https://en.wikipedia.org/wiki/.sx
  // Submitted by registry <jcvignes@openregistry.com>

  'gov.sx',

  // sy : https://en.wikipedia.org/wiki/.sy
  // see also: http://www.gobin.info/domainname/sy.doc

  'edu.sy',
  'gov.sy',
  'net.sy',
  'mil.sy',
  'com.sy',
  'org.sy',

  // sz : https://en.wikipedia.org/wiki/.sz
  // http://www.sispa.org.sz/

  'co.sz',
  'ac.sz',
  'org.sz',

  // tc : https://en.wikipedia.org/wiki/.tc

  // td : https://en.wikipedia.org/wiki/.td

  // tel: https://en.wikipedia.org/wiki/.tel
  // http://www.telnic.org/

  // tf : https://en.wikipedia.org/wiki/.tf

  // tg : https://en.wikipedia.org/wiki/.tg
  // http://www.nic.tg/

  // th : https://en.wikipedia.org/wiki/.th
  // Submitted by registry <krit@thains.co.th>

  'ac.th',
  'co.th',
  'go.th',
  'in.th',
  'mi.th',
  'net.th',
  'or.th',

  // tj : http://www.nic.tj/policy.html

  'ac.tj',
  'biz.tj',
  'co.tj',
  'com.tj',
  'edu.tj',
  'go.tj',
  'gov.tj',
  'int.tj',
  'mil.tj',
  'name.tj',
  'net.tj',
  'nic.tj',
  'org.tj',
  'test.tj',
  'web.tj',

  // tk : https://en.wikipedia.org/wiki/.tk

  // tl : https://en.wikipedia.org/wiki/.tl

  'gov.tl',

  // tm : http://www.nic.tm/local.html

  'com.tm',
  'co.tm',
  'org.tm',
  'net.tm',
  'nom.tm',
  'gov.tm',
  'mil.tm',
  'edu.tm',

  // tn : http://www.registre.tn/fr/
  // https://whois.ati.tn/

  'com.tn',
  'ens.tn',
  'fin.tn',
  'gov.tn',
  'ind.tn',
  'info.tn',
  'intl.tn',
  'mincom.tn',
  'nat.tn',
  'net.tn',
  'org.tn',
  'perso.tn',
  'tourism.tn',

  // to : https://en.wikipedia.org/wiki/.to
  // Submitted by registry <egullich@colo.to>

  'com.to',
  'gov.to',
  'net.to',
  'org.to',
  'edu.to',
  'mil.to',

  // tr : https://nic.tr/
  // https://nic.tr/forms/eng/policies.pdf
  // https://nic.tr/index.php?USRACTN=PRICELST

  'av.tr',
  'bbs.tr',
  'bel.tr',
  'biz.tr',
  'com.tr',
  'dr.tr',
  'edu.tr',
  'gen.tr',
  'gov.tr',
  'info.tr',
  'mil.tr',
  'k12.tr',
  'kep.tr',
  'name.tr',
  'net.tr',
  'org.tr',
  'pol.tr',
  'tel.tr',
  'tsk.tr',
  'tv.tr',
  'web.tr',
  // Used by Northern Cyprus
  'nc.tr',
  // Used by government agencies of Northern Cyprus
  'gov.nc.tr',

  // tt : http://www.nic.tt/

  'co.tt',
  'com.tt',
  'org.tt',
  'net.tt',
  'biz.tt',
  'info.tt',
  'pro.tt',
  'int.tt',
  'coop.tt',
  'jobs.tt',
  'mobi.tt',
  'travel.tt',
  'museum.tt',
  'aero.tt',
  'name.tt',
  'gov.tt',
  'edu.tt',

  // tv : https://en.wikipedia.org/wiki/.tv
  // Not listing any 2LDs as reserved since none seem to exist in practice,
  // Wikipedia notwithstanding.

  // tw : https://en.wikipedia.org/wiki/.tw

  'edu.tw',
  'gov.tw',
  'mil.tw',
  'com.tw',
  'net.tw',
  'org.tw',
  'idv.tw',
  'game.tw',
  'ebiz.tw',
  'club.tw',
  '網路.tw',
  '組織.tw',
  '商業.tw',

  // tz : http://www.tznic.or.tz/index.php/domains
  // Submitted by registry <manager@tznic.or.tz>

  'ac.tz',
  'co.tz',
  'go.tz',
  'hotel.tz',
  'info.tz',
  'me.tz',
  'mil.tz',
  'mobi.tz',
  'ne.tz',
  'or.tz',
  'sc.tz',
  'tv.tz',

  // ua : https://hostmaster.ua/policy/?ua
  // Submitted by registry <dk@cctld.ua>

  // ua 2LD
  'com.ua',
  'edu.ua',
  'gov.ua',
  'in.ua',
  'net.ua',
  'org.ua',
  // ua geographic names
  // https://hostmaster.ua/2ld/
  'cherkassy.ua',
  'cherkasy.ua',
  'chernigov.ua',
  'chernihiv.ua',
  'chernivtsi.ua',
  'chernovtsy.ua',
  'ck.ua',
  'cn.ua',
  'cr.ua',
  'crimea.ua',
  'cv.ua',
  'dn.ua',
  'dnepropetrovsk.ua',
  'dnipropetrovsk.ua',
  'donetsk.ua',
  'dp.ua',
  'if.ua',
  'ivano-frankivsk.ua',
  'kh.ua',
  'kharkiv.ua',
  'kharkov.ua',
  'kherson.ua',
  'khmelnitskiy.ua',
  'khmelnytskyi.ua',
  'kiev.ua',
  'kirovograd.ua',
  'km.ua',
  'kr.ua',
  'krym.ua',
  'ks.ua',
  'kv.ua',
  'kyiv.ua',
  'lg.ua',
  'lt.ua',
  'lugansk.ua',
  'lutsk.ua',
  'lv.ua',
  'lviv.ua',
  'mk.ua',
  'mykolaiv.ua',
  'nikolaev.ua',
  'od.ua',
  'odesa.ua',
  'odessa.ua',
  'pl.ua',
  'poltava.ua',
  'rivne.ua',
  'rovno.ua',
  'rv.ua',
  'sb.ua',
  'sebastopol.ua',
  'sevastopol.ua',
  'sm.ua',
  'sumy.ua',
  'te.ua',
  'ternopil.ua',
  'uz.ua',
  'uzhgorod.ua',
  'vinnica.ua',
  'vinnytsia.ua',
  'vn.ua',
  'volyn.ua',
  'yalta.ua',
  'zaporizhzhe.ua',
  'zaporizhzhia.ua',
  'zhitomir.ua',
  'zhytomyr.ua',
  'zp.ua',
  'zt.ua',

  // ug : https://www.registry.co.ug/

  'co.ug',
  'or.ug',
  'ac.ug',
  'sc.ug',
  'go.ug',
  'ne.ug',
  'com.ug',
  'org.ug',

  // uk : https://en.wikipedia.org/wiki/.uk
  // Submitted by registry <Michael.Daly@nominet.org.uk>

  'ac.uk',
  'co.uk',
  'gov.uk',
  'ltd.uk',
  'me.uk',
  'net.uk',
  'nhs.uk',
  'org.uk',
  'plc.uk',
  'police.uk',
  'sch.uk',

  // us : https://en.wikipedia.org/wiki/.us

  'dni.us',
  'fed.us',
  'isa.us',
  'kids.us',
  'nsn.us',
  // us geographic names
  'ak.us',
  'al.us',
  'ar.us',
  'as.us',
  'az.us',
  'ca.us',
  'co.us',
  'ct.us',
  'dc.us',
  'de.us',
  'fl.us',
  'ga.us',
  'gu.us',
  'hi.us',
  'ia.us',
  'id.us',
  'il.us',
  'in.us',
  'ks.us',
  'ky.us',
  'la.us',
  'ma.us',
  'md.us',
  'me.us',
  'mi.us',
  'mn.us',
  'mo.us',
  'ms.us',
  'mt.us',
  'nc.us',
  'nd.us',
  'ne.us',
  'nh.us',
  'nj.us',
  'nm.us',
  'nv.us',
  'ny.us',
  'oh.us',
  'ok.us',
  'or.us',
  'pa.us',
  'pr.us',
  'ri.us',
  'sc.us',
  'sd.us',
  'tn.us',
  'tx.us',
  'ut.us',
  'vi.us',
  'vt.us',
  'va.us',
  'wa.us',
  'wi.us',
  'wv.us',
  'wy.us',
  // The registrar notes several more specific domains available in each state,
  // such as state.*.us, dst.*.us, etc., but resolution of these is somewhat
  // haphazard; in some states these domains resolve as addresses, while in others
  // only subdomains are available, or even nothing at all. We include the
  // most common ones where it's clear that different sites are different
  // entities.
  'k12.ak.us',
  'k12.al.us',
  'k12.ar.us',
  'k12.as.us',
  'k12.az.us',
  'k12.ca.us',
  'k12.co.us',
  'k12.ct.us',
  'k12.dc.us',
  'k12.de.us',
  'k12.fl.us',
  'k12.ga.us',
  'k12.gu.us',
  // k12.hi.us  Bug 614565 - Hawaii has a state-wide DOE login
  'k12.ia.us',
  'k12.id.us',
  'k12.il.us',
  'k12.in.us',
  'k12.ks.us',
  'k12.ky.us',
  'k12.la.us',
  'k12.ma.us',
  'k12.md.us',
  'k12.me.us',
  'k12.mi.us',
  'k12.mn.us',
  'k12.mo.us',
  'k12.ms.us',
  'k12.mt.us',
  'k12.nc.us',
  // k12.nd.us  Bug 1028347 - Removed at request of Travis Rosso <trossow@nd.gov>
  'k12.ne.us',
  'k12.nh.us',
  'k12.nj.us',
  'k12.nm.us',
  'k12.nv.us',
  'k12.ny.us',
  'k12.oh.us',
  'k12.ok.us',
  'k12.or.us',
  'k12.pa.us',
  'k12.pr.us',
  // k12.ri.us  Removed at request of Kim Cournoyer <netsupport@staff.ri.net>
  'k12.sc.us',
  // k12.sd.us  Bug 934131 - Removed at request of James Booze <James.Booze@k12.sd.us>
  'k12.tn.us',
  'k12.tx.us',
  'k12.ut.us',
  'k12.vi.us',
  'k12.vt.us',
  'k12.va.us',
  'k12.wa.us',
  'k12.wi.us',
  // k12.wv.us  Bug 947705 - Removed at request of Verne Britton <verne@wvnet.edu>
  'k12.wy.us',
  'cc.ak.us',
  'cc.al.us',
  'cc.ar.us',
  'cc.as.us',
  'cc.az.us',
  'cc.ca.us',
  'cc.co.us',
  'cc.ct.us',
  'cc.dc.us',
  'cc.de.us',
  'cc.fl.us',
  'cc.ga.us',
  'cc.gu.us',
  'cc.hi.us',
  'cc.ia.us',
  'cc.id.us',
  'cc.il.us',
  'cc.in.us',
  'cc.ks.us',
  'cc.ky.us',
  'cc.la.us',
  'cc.ma.us',
  'cc.md.us',
  'cc.me.us',
  'cc.mi.us',
  'cc.mn.us',
  'cc.mo.us',
  'cc.ms.us',
  'cc.mt.us',
  'cc.nc.us',
  'cc.nd.us',
  'cc.ne.us',
  'cc.nh.us',
  'cc.nj.us',
  'cc.nm.us',
  'cc.nv.us',
  'cc.ny.us',
  'cc.oh.us',
  'cc.ok.us',
  'cc.or.us',
  'cc.pa.us',
  'cc.pr.us',
  'cc.ri.us',
  'cc.sc.us',
  'cc.sd.us',
  'cc.tn.us',
  'cc.tx.us',
  'cc.ut.us',
  'cc.vi.us',
  'cc.vt.us',
  'cc.va.us',
  'cc.wa.us',
  'cc.wi.us',
  'cc.wv.us',
  'cc.wy.us',
  'lib.ak.us',
  'lib.al.us',
  'lib.ar.us',
  'lib.as.us',
  'lib.az.us',
  'lib.ca.us',
  'lib.co.us',
  'lib.ct.us',
  'lib.dc.us',
  // lib.de.us  Issue #243 - Moved to Private section at request of Ed Moore <Ed.Moore@lib.de.us>
  'lib.fl.us',
  'lib.ga.us',
  'lib.gu.us',
  'lib.hi.us',
  'lib.ia.us',
  'lib.id.us',
  'lib.il.us',
  'lib.in.us',
  'lib.ks.us',
  'lib.ky.us',
  'lib.la.us',
  'lib.ma.us',
  'lib.md.us',
  'lib.me.us',
  'lib.mi.us',
  'lib.mn.us',
  'lib.mo.us',
  'lib.ms.us',
  'lib.mt.us',
  'lib.nc.us',
  'lib.nd.us',
  'lib.ne.us',
  'lib.nh.us',
  'lib.nj.us',
  'lib.nm.us',
  'lib.nv.us',
  'lib.ny.us',
  'lib.oh.us',
  'lib.ok.us',
  'lib.or.us',
  'lib.pa.us',
  'lib.pr.us',
  'lib.ri.us',
  'lib.sc.us',
  'lib.sd.us',
  'lib.tn.us',
  'lib.tx.us',
  'lib.ut.us',
  'lib.vi.us',
  'lib.vt.us',
  'lib.va.us',
  'lib.wa.us',
  'lib.wi.us',
  // lib.wv.us  Bug 941670 - Removed at request of Larry W Arnold <arnold@wvlc.lib.wv.us>
  'lib.wy.us',
  // k12.ma.us contains school districts in Massachusetts. The 4LDs are
  //  managed independently except for private (PVT), charter (CHTR) and
  //  parochial (PAROCH) schools.  Those are delegated directly to the
  //  5LD operators.   <k12-ma-hostmaster _ at _ rsuc.gweep.net>
  'pvt.k12.ma.us',
  'chtr.k12.ma.us',
  'paroch.k12.ma.us',
  // Merit Network, Inc. maintains the registry for =~ /(k12|cc|lib).mi.us/ and the following
  //    see also: http://domreg.merit.edu
  //    see also: whois -h whois.domreg.merit.edu help
  'ann-arbor.mi.us',
  'cog.mi.us',
  'dst.mi.us',
  'eaton.mi.us',
  'gen.mi.us',
  'mus.mi.us',
  'tec.mi.us',
  'washtenaw.mi.us',

  // uy : http://www.nic.org.uy/

  'com.uy',
  'edu.uy',
  'gub.uy',
  'mil.uy',
  'net.uy',
  'org.uy',

  // uz : http://www.reg.uz/

  'co.uz',
  'com.uz',
  'net.uz',
  'org.uz',

  // va : https://en.wikipedia.org/wiki/.va

  // vc : https://en.wikipedia.org/wiki/.vc
  // Submitted by registry <kshah@ca.afilias.info>

  'com.vc',
  'net.vc',
  'org.vc',
  'gov.vc',
  'mil.vc',
  'edu.vc',

  // ve : https://registro.nic.ve/
  // Submitted by registry nic@nic.ve and nicve@conatel.gob.ve

  'arts.ve',
  'bib.ve',
  'co.ve',
  'com.ve',
  'e12.ve',
  'edu.ve',
  'firm.ve',
  'gob.ve',
  'gov.ve',
  'info.ve',
  'int.ve',
  'mil.ve',
  'net.ve',
  'nom.ve',
  'org.ve',
  'rar.ve',
  'rec.ve',
  'store.ve',
  'tec.ve',
  'web.ve',

  // vg : https://en.wikipedia.org/wiki/.vg

  // vi : http://www.nic.vi/newdomainform.htm
  // http://www.nic.vi/Domain_Rules/body_domain_rules.html indicates some other
  // TLDs are "reserved", such as edu.vi and gov.vi, but doesn't actually say they
  // are available for registration (which they do not seem to be).

  'co.vi',
  'com.vi',
  'k12.vi',
  'net.vi',
  'org.vi',

  // vn : https://www.dot.vn/vnnic/vnnic/domainregistration.jsp

  'com.vn',
  'net.vn',
  'org.vn',
  'edu.vn',
  'gov.vn',
  'int.vn',
  'ac.vn',
  'biz.vn',
  'info.vn',
  'name.vn',
  'pro.vn',
  'health.vn',

  // vu : https://en.wikipedia.org/wiki/.vu
  // http://www.vunic.vu/

  'com.vu',
  'edu.vu',
  'net.vu',
  'org.vu',

  // wf : http://www.afnic.fr/medias/documents/AFNIC-naming-policy2012.pdf

  // ws : https://en.wikipedia.org/wiki/.ws
  // http://samoanic.ws/index.dhtml

  'com.ws',
  'net.ws',
  'org.ws',
  'gov.ws',
  'edu.ws',

  // yt : http://www.afnic.fr/medias/documents/AFNIC-naming-policy2012.pdf

  // IDN ccTLDs
  // When submitting patches, please maintain a sort by ISO 3166 ccTLD, then
  // U-label, and follow this format:
  // // A-Label ("<Latin renderings>", <language name>[, variant info]) : <ISO 3166 ccTLD>
  // // [sponsoring org]
  // U-Label

  // xn--mgbaam7a8h ("Emerat", Arabic) : AE
  // http://nic.ae/english/arabicdomain/rules.jsp

  // xn--y9a3aq ("hye", Armenian) : AM
  // ISOC AM (operated by .am Registry)

  // xn--54b7fta0cc ("Bangla", Bangla) : BD

  // xn--90ae ("bg", Bulgarian) : BG

  // xn--mgbcpq6gpa1a ("albahrain", Arabic) : BH

  // xn--90ais ("bel", Belarusian/Russian Cyrillic) : BY
  // Operated by .by registry

  // xn--fiqs8s ("Zhongguo/China", Chinese, Simplified) : CN
  // CNNIC
  // http://cnnic.cn/html/Dir/2005/10/11/3218.htm

  // xn--fiqz9s ("Zhongguo/China", Chinese, Traditional) : CN
  // CNNIC
  // http://cnnic.cn/html/Dir/2005/10/11/3218.htm

  // xn--lgbbat1ad8j ("Algeria/Al Jazair", Arabic) : DZ

  // xn--wgbh1c ("Egypt/Masr", Arabic) : EG
  // http://www.dotmasr.eg/

  // xn--e1a4c ("eu", Cyrillic) : EU
  // https://eurid.eu

  // xn--qxa6a ("eu", Greek) : EU
  // https://eurid.eu

  // xn--mgbah1a3hjkrd ("Mauritania", Arabic) : MR

  // xn--node ("ge", Georgian Mkhedruli) : GE

  // xn--qxam ("el", Greek) : GR
  // Hellenic Ministry of Infrastructure, Transport, and Networks

  // xn--j6w193g ("Hong Kong", Chinese) : HK
  // https://www.hkirc.hk
  // Submitted by registry <hk.tech@hkirc.hk>
  // https://www.hkirc.hk/content.jsp?id=30#!/34

  '公司.香港',
  '教育.香港',
  '政府.香港',
  '個人.香港',
  '網絡.香港',
  '組織.香港',

  // xn--2scrj9c ("Bharat", Kannada) : IN
  // India

  // xn--3hcrj9c ("Bharat", Oriya) : IN
  // India

  // xn--45br5cyl ("Bharatam", Assamese) : IN
  // India

  // xn--h2breg3eve ("Bharatam", Sanskrit) : IN
  // India

  // xn--h2brj9c8c ("Bharot", Santali) : IN
  // India

  // xn--mgbgu82a ("Bharat", Sindhi) : IN
  // India

  // xn--rvc1e0am3e ("Bharatam", Malayalam) : IN
  // India

  // xn--h2brj9c ("Bharat", Devanagari) : IN
  // India

  // xn--mgbbh1a ("Bharat", Kashmiri) : IN
  // India

  // xn--mgbbh1a71e ("Bharat", Arabic) : IN
  // India

  // xn--fpcrj9c3d ("Bharat", Telugu) : IN
  // India

  // xn--gecrj9c ("Bharat", Gujarati) : IN
  // India

  // xn--s9brj9c ("Bharat", Gurmukhi) : IN
  // India

  // xn--45brj9c ("Bharat", Bengali) : IN
  // India

  // xn--xkc2dl3a5ee0h ("India", Tamil) : IN
  // India

  // xn--mgba3a4f16a ("Iran", Persian) : IR

  // xn--mgba3a4fra ("Iran", Arabic) : IR

  // xn--mgbtx2b ("Iraq", Arabic) : IQ
  // Communications and Media Commission

  // xn--mgbayh7gpa ("al-Ordon", Arabic) : JO
  // National Information Technology Center (NITC)
  // Royal Scientific Society, Al-Jubeiha

  // xn--3e0b707e ("Republic of Korea", Hangul) : KR

  // xn--80ao21a ("Kaz", Kazakh) : KZ

  // xn--q7ce6a ("Lao", Lao) : LA

  // xn--fzc2c9e2c ("Lanka", Sinhalese-Sinhala) : LK
  // https://nic.lk

  // xn--xkc2al3hye2a ("Ilangai", Tamil) : LK
  // https://nic.lk

  // xn--mgbc0a9azcg ("Morocco/al-Maghrib", Arabic) : MA

  // xn--d1alf ("mkd", Macedonian) : MK
  // MARnet

  // xn--l1acc ("mon", Mongolian) : MN

  // xn--mix891f ("Macao", Chinese, Traditional) : MO
  // MONIC / HNET Asia (Registry Operator for .mo)

  // xn--mix082f ("Macao", Chinese, Simplified) : MO

  // xn--mgbx4cd0ab ("Malaysia", Malay) : MY

  // xn--mgb9awbf ("Oman", Arabic) : OM

  // xn--mgbai9azgqp6j ("Pakistan", Urdu/Arabic) : PK

  // xn--mgbai9a5eva00b ("Pakistan", Urdu/Arabic, variant) : PK

  // xn--ygbi2ammx ("Falasteen", Arabic) : PS
  // The Palestinian National Internet Naming Authority (PNINA)
  // http://www.pnina.ps

  // xn--90a3ac ("srb", Cyrillic) : RS
  // https://www.rnids.rs/en/domains/national-domains

  'пр.срб',
  'орг.срб',
  'обр.срб',
  'од.срб',
  'упр.срб',
  'ак.срб',

  // xn--p1ai ("rf", Russian-Cyrillic) : RU
  // https://cctld.ru/files/pdf/docs/en/rules_ru-rf.pdf
  // Submitted by George Georgievsky <gug@cctld.ru>

  // xn--wgbl6a ("Qatar", Arabic) : QA
  // http://www.ict.gov.qa/

  // xn--mgberp4a5d4ar ("AlSaudiah", Arabic) : SA
  // http://www.nic.net.sa/

  // xn--mgberp4a5d4a87g ("AlSaudiah", Arabic, variant)  : SA

  // xn--mgbqly7c0a67fbc ("AlSaudiah", Arabic, variant) : SA

  // xn--mgbqly7cvafr ("AlSaudiah", Arabic, variant) : SA

  // xn--mgbpl2fh ("sudan", Arabic) : SD
  // Operated by .sd registry

  // xn--yfro4i67o Singapore ("Singapore", Chinese) : SG

  // xn--clchc0ea0b2g2a9gcd ("Singapore", Tamil) : SG

  // xn--ogbpf8fl ("Syria", Arabic) : SY

  // xn--mgbtf8fl ("Syria", Arabic, variant) : SY

  // xn--o3cw4h ("Thai", Thai) : TH
  // http://www.thnic.co.th

  'ศึกษา.ไทย',
  'ธุรกิจ.ไทย',
  'รัฐบาล.ไทย',
  'ทหาร.ไทย',
  'เน็ต.ไทย',
  'องค์กร.ไทย',

  // xn--pgbs0dh ("Tunisia", Arabic) : TN
  // http://nic.tn

  // xn--kpry57d ("Taiwan", Chinese, Traditional) : TW
  // http://www.twnic.net/english/dn/dn_07a.htm

  // xn--kprw13d ("Taiwan", Chinese, Simplified) : TW
  // http://www.twnic.net/english/dn/dn_07a.htm

  // xn--nnx388a ("Taiwan", Chinese, variant) : TW

  // xn--j1amh ("ukr", Cyrillic) : UA

  // xn--mgb2ddes ("AlYemen", Arabic) : YE

  // xxx : http://icmregistry.com

  // ye : http://www.y.net.ye/services/domain_name.htm

  'com.ye',
  'edu.ye',
  'gov.ye',
  'net.ye',
  'mil.ye',
  'org.ye',

  // za : https://www.zadna.org.za/content/page/domain-information/
  'ac.za',
  'agric.za',
  'alt.za',
  'co.za',
  'edu.za',
  'gov.za',
  'grondar.za',
  'law.za',
  'mil.za',
  'net.za',
  'ngo.za',
  'nic.za',
  'nis.za',
  'nom.za',
  'org.za',
  'school.za',
  'tm.za',
  'web.za',

  // zm : https://zicta.zm/
  // Submitted by registry <info@zicta.zm>

  'ac.zm',
  'biz.zm',
  'co.zm',
  'com.zm',
  'edu.zm',
  'gov.zm',
  'info.zm',
  'mil.zm',
  'net.zm',
  'org.zm',
  'sch.zm',

  // zw : https://www.potraz.gov.zw/
  // Confirmed by registry <bmtengwa@potraz.gov.zw> 2017-01-25

  'ac.zw',
  'co.zw',
  'gov.zw',
  'mil.zw',
  'org.zw',

  // newGTLDs

  // List of new gTLDs imported from https://www.icann.org/resources/registries/gtlds/v2/gtlds.json on 2021-12-22T15:14:14Z
  // This list is auto-generated, don't edit it manually.
  // aaa : 2015-02-26 American Automobile Association, Inc.

  // aarp : 2015-05-21 AARP

  // abarth : 2015-07-30 Fiat Chrysler Automobiles N.V.

  // abb : 2014-10-24 ABB Ltd

  // abbott : 2014-07-24 Abbott Laboratories, Inc.

  // abbvie : 2015-07-30 AbbVie Inc.

  // abc : 2015-07-30 Disney Enterprises, Inc.

  // able : 2015-06-25 Able Inc.

  // abogado : 2014-04-24 Registry Services, LLC

  // abudhabi : 2015-07-30 Abu Dhabi Systems and Information Centre

  // academy : 2013-11-07 Binky Moon, LLC

  // accenture : 2014-08-15 Accenture plc

  // accountant : 2014-11-20 dot Accountant Limited

  // accountants : 2014-03-20 Binky Moon, LLC

  // aco : 2015-01-08 ACO Severin Ahlmann GmbH & Co. KG

  // actor : 2013-12-12 Dog Beach, LLC

  // adac : 2015-07-16 Allgemeiner Deutscher Automobil-Club e.V. (ADAC)

  // ads : 2014-12-04 Charleston Road Registry Inc.

  // adult : 2014-10-16 ICM Registry AD LLC

  // aeg : 2015-03-19 Aktiebolaget Electrolux

  // aetna : 2015-05-21 Aetna Life Insurance Company

  // afl : 2014-10-02 Australian Football League

  // africa : 2014-03-24 ZA Central Registry NPC trading as Registry.Africa

  // agakhan : 2015-04-23 Fondation Aga Khan (Aga Khan Foundation)

  // agency : 2013-11-14 Binky Moon, LLC

  // aig : 2014-12-18 American International Group, Inc.

  // airbus : 2015-07-30 Airbus S.A.S.

  // airforce : 2014-03-06 Dog Beach, LLC

  // airtel : 2014-10-24 Bharti Airtel Limited

  // akdn : 2015-04-23 Fondation Aga Khan (Aga Khan Foundation)

  // alfaromeo : 2015-07-31 Fiat Chrysler Automobiles N.V.

  // alibaba : 2015-01-15 Alibaba Group Holding Limited

  // alipay : 2015-01-15 Alibaba Group Holding Limited

  // allfinanz : 2014-07-03 Allfinanz Deutsche Vermögensberatung Aktiengesellschaft

  // allstate : 2015-07-31 Allstate Fire and Casualty Insurance Company

  // ally : 2015-06-18 Ally Financial Inc.

  // alsace : 2014-07-02 Region Grand Est

  // alstom : 2015-07-30 ALSTOM

  // amazon : 2019-12-19 Amazon Registry Services, Inc.

  // americanexpress : 2015-07-31 American Express Travel Related Services Company, Inc.

  // americanfamily : 2015-07-23 AmFam, Inc.

  // amex : 2015-07-31 American Express Travel Related Services Company, Inc.

  // amfam : 2015-07-23 AmFam, Inc.

  // amica : 2015-05-28 Amica Mutual Insurance Company

  // amsterdam : 2014-07-24 Gemeente Amsterdam

  // analytics : 2014-12-18 Campus IP LLC

  // android : 2014-08-07 Charleston Road Registry Inc.

  // anquan : 2015-01-08 Beijing Qihu Keji Co., Ltd.

  // anz : 2015-07-31 Australia and New Zealand Banking Group Limited

  // aol : 2015-09-17 Oath Inc.

  // apartments : 2014-12-11 Binky Moon, LLC

  // app : 2015-05-14 Charleston Road Registry Inc.

  // apple : 2015-05-14 Apple Inc.

  // aquarelle : 2014-07-24 Aquarelle.com

  // arab : 2015-11-12 League of Arab States

  // aramco : 2014-11-20 Aramco Services Company

  // archi : 2014-02-06 Afilias Limited

  // army : 2014-03-06 Dog Beach, LLC

  // art : 2016-03-24 UK Creative Ideas Limited

  // arte : 2014-12-11 Association Relative à la Télévision Européenne G.E.I.E.

  // asda : 2015-07-31 Wal-Mart Stores, Inc.

  // associates : 2014-03-06 Binky Moon, LLC

  // athleta : 2015-07-30 The Gap, Inc.

  // attorney : 2014-03-20 Dog Beach, LLC

  // auction : 2014-03-20 Dog Beach, LLC

  // audi : 2015-05-21 AUDI Aktiengesellschaft

  // audible : 2015-06-25 Amazon Registry Services, Inc.

  // audio : 2014-03-20 UNR Corp.

  // auspost : 2015-08-13 Australian Postal Corporation

  // author : 2014-12-18 Amazon Registry Services, Inc.

  // auto : 2014-11-13 XYZ.COM LLC

  // autos : 2014-01-09 XYZ.COM LLC

  // avianca : 2015-01-08 Avianca Holdings S.A.

  // aws : 2015-06-25 AWS Registry LLC

  // axa : 2013-12-19 AXA Group Operations SAS

  // azure : 2014-12-18 Microsoft Corporation

  // baby : 2015-04-09 XYZ.COM LLC

  // baidu : 2015-01-08 Baidu, Inc.

  // banamex : 2015-07-30 Citigroup Inc.

  // bananarepublic : 2015-07-31 The Gap, Inc.

  // band : 2014-06-12 Dog Beach, LLC

  // bank : 2014-09-25 fTLD Registry Services LLC

  // bar : 2013-12-12 Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable

  // barcelona : 2014-07-24 Municipi de Barcelona

  // barclaycard : 2014-11-20 Barclays Bank PLC

  // barclays : 2014-11-20 Barclays Bank PLC

  // barefoot : 2015-06-11 Gallo Vineyards, Inc.

  // bargains : 2013-11-14 Binky Moon, LLC

  // baseball : 2015-10-29 MLB Advanced Media DH, LLC

  // basketball : 2015-08-20 Fédération Internationale de Basketball (FIBA)

  // bauhaus : 2014-04-17 Werkhaus GmbH

  // bayern : 2014-01-23 Bayern Connect GmbH

  // bbc : 2014-12-18 British Broadcasting Corporation

  // bbt : 2015-07-23 BB&T Corporation

  // bbva : 2014-10-02 BANCO BILBAO VIZCAYA ARGENTARIA, S.A.

  // bcg : 2015-04-02 The Boston Consulting Group, Inc.

  // bcn : 2014-07-24 Municipi de Barcelona

  // beats : 2015-05-14 Beats Electronics, LLC

  // beauty : 2015-12-03 XYZ.COM LLC

  // beer : 2014-01-09 Registry Services, LLC

  // bentley : 2014-12-18 Bentley Motors Limited

  // berlin : 2013-10-31 dotBERLIN GmbH & Co. KG

  // best : 2013-12-19 BestTLD Pty Ltd

  // bestbuy : 2015-07-31 BBY Solutions, Inc.

  // bet : 2015-05-07 Afilias Limited

  // bharti : 2014-01-09 Bharti Enterprises (Holding) Private Limited

  // bible : 2014-06-19 American Bible Society

  // bid : 2013-12-19 dot Bid Limited

  // bike : 2013-08-27 Binky Moon, LLC

  // bing : 2014-12-18 Microsoft Corporation

  // bingo : 2014-12-04 Binky Moon, LLC

  // bio : 2014-03-06 Afilias Limited

  // black : 2014-01-16 Afilias Limited

  // blackfriday : 2014-01-16 UNR Corp.

  // blockbuster : 2015-07-30 Dish DBS Corporation

  // blog : 2015-05-14 Knock Knock WHOIS There, LLC

  // bloomberg : 2014-07-17 Bloomberg IP Holdings LLC

  // blue : 2013-11-07 Afilias Limited

  // bms : 2014-10-30 Bristol-Myers Squibb Company

  // bmw : 2014-01-09 Bayerische Motoren Werke Aktiengesellschaft

  // bnpparibas : 2014-05-29 BNP Paribas

  // boats : 2014-12-04 XYZ.COM LLC

  // boehringer : 2015-07-09 Boehringer Ingelheim International GmbH

  // bofa : 2015-07-31 Bank of America Corporation

  // bom : 2014-10-16 Núcleo de Informação e Coordenação do Ponto BR - NIC.br

  // bond : 2014-06-05 ShortDot SA

  // boo : 2014-01-30 Charleston Road Registry Inc.

  // book : 2015-08-27 Amazon Registry Services, Inc.

  // booking : 2015-07-16 Booking.com B.V.

  // bosch : 2015-06-18 Robert Bosch GMBH

  // bostik : 2015-05-28 Bostik SA

  // boston : 2015-12-10 Registry Services, LLC

  // bot : 2014-12-18 Amazon Registry Services, Inc.

  // boutique : 2013-11-14 Binky Moon, LLC

  // box : 2015-11-12 Intercap Registry Inc.

  // bradesco : 2014-12-18 Banco Bradesco S.A.

  // bridgestone : 2014-12-18 Bridgestone Corporation

  // broadway : 2014-12-22 Celebrate Broadway, Inc.

  // broker : 2014-12-11 Dog Beach, LLC

  // brother : 2015-01-29 Brother Industries, Ltd.

  // brussels : 2014-02-06 DNS.be vzw

  // budapest : 2013-11-21 Minds + Machines Group Limited

  // bugatti : 2015-07-23 Bugatti International SA

  // build : 2013-11-07 Plan Bee LLC

  // builders : 2013-11-07 Binky Moon, LLC

  // business : 2013-11-07 Binky Moon, LLC

  // buy : 2014-12-18 Amazon Registry Services, Inc.

  // buzz : 2013-10-02 DOTSTRATEGY CO.

  // bzh : 2014-02-27 Association www.bzh

  // cab : 2013-10-24 Binky Moon, LLC

  // cafe : 2015-02-11 Binky Moon, LLC

  // cal : 2014-07-24 Charleston Road Registry Inc.

  // call : 2014-12-18 Amazon Registry Services, Inc.

  // calvinklein : 2015-07-30 PVH gTLD Holdings LLC

  // cam : 2016-04-21 AC Webconnecting Holding B.V.

  // camera : 2013-08-27 Binky Moon, LLC

  // camp : 2013-11-07 Binky Moon, LLC

  // cancerresearch : 2014-05-15 Australian Cancer Research Foundation

  // canon : 2014-09-12 Canon Inc.

  // capetown : 2014-03-24 ZA Central Registry NPC trading as ZA Central Registry

  // capital : 2014-03-06 Binky Moon, LLC

  // capitalone : 2015-08-06 Capital One Financial Corporation

  // car : 2015-01-22 XYZ.COM LLC

  // caravan : 2013-12-12 Caravan International, Inc.

  // cards : 2013-12-05 Binky Moon, LLC

  // care : 2014-03-06 Binky Moon, LLC

  // career : 2013-10-09 dotCareer LLC

  // careers : 2013-10-02 Binky Moon, LLC

  // cars : 2014-11-13 XYZ.COM LLC

  // casa : 2013-11-21 Registry Services, LLC

  // case : 2015-09-03 Helium TLDs Ltd

  // cash : 2014-03-06 Binky Moon, LLC

  // casino : 2014-12-18 Binky Moon, LLC

  // catering : 2013-12-05 Binky Moon, LLC

  // catholic : 2015-10-21 Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)

  // cba : 2014-06-26 COMMONWEALTH BANK OF AUSTRALIA

  // cbn : 2014-08-22 The Christian Broadcasting Network, Inc.

  // cbre : 2015-07-02 CBRE, Inc.

  // cbs : 2015-08-06 CBS Domains Inc.

  // center : 2013-11-07 Binky Moon, LLC

  // ceo : 2013-11-07 CEOTLD Pty Ltd

  // cern : 2014-06-05 European Organization for Nuclear Research ("CERN")

  // cfa : 2014-08-28 CFA Institute

  // cfd : 2014-12-11 ShortDot SA

  // chanel : 2015-04-09 Chanel International B.V.

  // channel : 2014-05-08 Charleston Road Registry Inc.

  // charity : 2018-04-11 Binky Moon, LLC

  // chase : 2015-04-30 JPMorgan Chase Bank, National Association

  // chat : 2014-12-04 Binky Moon, LLC

  // cheap : 2013-11-14 Binky Moon, LLC

  // chintai : 2015-06-11 CHINTAI Corporation

  // christmas : 2013-11-21 UNR Corp.

  // chrome : 2014-07-24 Charleston Road Registry Inc.

  // church : 2014-02-06 Binky Moon, LLC

  // cipriani : 2015-02-19 Hotel Cipriani Srl

  // circle : 2014-12-18 Amazon Registry Services, Inc.

  // cisco : 2014-12-22 Cisco Technology, Inc.

  // citadel : 2015-07-23 Citadel Domain LLC

  // citi : 2015-07-30 Citigroup Inc.

  // citic : 2014-01-09 CITIC Group Corporation

  // city : 2014-05-29 Binky Moon, LLC

  // cityeats : 2014-12-11 Lifestyle Domain Holdings, Inc.

  // claims : 2014-03-20 Binky Moon, LLC

  // cleaning : 2013-12-05 Binky Moon, LLC

  // click : 2014-06-05 UNR Corp.

  // clinic : 2014-03-20 Binky Moon, LLC

  // clinique : 2015-10-01 The Estée Lauder Companies Inc.

  // clothing : 2013-08-27 Binky Moon, LLC

  // cloud : 2015-04-16 Aruba PEC S.p.A.

  // club : 2013-11-08 Registry Services, LLC

  // clubmed : 2015-06-25 Club Méditerranée S.A.

  // coach : 2014-10-09 Binky Moon, LLC

  // codes : 2013-10-31 Binky Moon, LLC

  // coffee : 2013-10-17 Binky Moon, LLC

  // college : 2014-01-16 XYZ.COM LLC

  // cologne : 2014-02-05 dotKoeln GmbH

  // comcast : 2015-07-23 Comcast IP Holdings I, LLC

  // commbank : 2014-06-26 COMMONWEALTH BANK OF AUSTRALIA

  // community : 2013-12-05 Binky Moon, LLC

  // company : 2013-11-07 Binky Moon, LLC

  // compare : 2015-10-08 Registry Services, LLC

  // computer : 2013-10-24 Binky Moon, LLC

  // comsec : 2015-01-08 VeriSign, Inc.

  // condos : 2013-12-05 Binky Moon, LLC

  // construction : 2013-09-16 Binky Moon, LLC

  // consulting : 2013-12-05 Dog Beach, LLC

  // contact : 2015-01-08 Dog Beach, LLC

  // contractors : 2013-09-10 Binky Moon, LLC

  // cooking : 2013-11-21 Registry Services, LLC

  // cookingchannel : 2015-07-02 Lifestyle Domain Holdings, Inc.

  // cool : 2013-11-14 Binky Moon, LLC

  // corsica : 2014-09-25 Collectivité de Corse

  // country : 2013-12-19 DotCountry LLC

  // coupon : 2015-02-26 Amazon Registry Services, Inc.

  // coupons : 2015-03-26 Binky Moon, LLC

  // courses : 2014-12-04 OPEN UNIVERSITIES AUSTRALIA PTY LTD

  // cpa : 2019-06-10 American Institute of Certified Public Accountants

  // credit : 2014-03-20 Binky Moon, LLC

  // creditcard : 2014-03-20 Binky Moon, LLC

  // creditunion : 2015-01-22 DotCooperation LLC

  // cricket : 2014-10-09 dot Cricket Limited

  // crown : 2014-10-24 Crown Equipment Corporation

  // crs : 2014-04-03 Federated Co-operatives Limited

  // cruise : 2015-12-10 Viking River Cruises (Bermuda) Ltd.

  // cruises : 2013-12-05 Binky Moon, LLC

  // csc : 2014-09-25 Alliance-One Services, Inc.

  // cuisinella : 2014-04-03 SCHMIDT GROUPE S.A.S.

  // cymru : 2014-05-08 Nominet UK

  // cyou : 2015-01-22 ShortDot SA

  // dabur : 2014-02-06 Dabur India Limited

  // dad : 2014-01-23 Charleston Road Registry Inc.

  // dance : 2013-10-24 Dog Beach, LLC

  // data : 2016-06-02 Dish DBS Corporation

  // date : 2014-11-20 dot Date Limited

  // dating : 2013-12-05 Binky Moon, LLC

  // datsun : 2014-03-27 NISSAN MOTOR CO., LTD.

  // day : 2014-01-30 Charleston Road Registry Inc.

  // dclk : 2014-11-20 Charleston Road Registry Inc.

  // dds : 2015-05-07 Registry Services, LLC

  // deal : 2015-06-25 Amazon Registry Services, Inc.

  // dealer : 2014-12-22 Intercap Registry Inc.

  // deals : 2014-05-22 Binky Moon, LLC

  // degree : 2014-03-06 Dog Beach, LLC

  // delivery : 2014-09-11 Binky Moon, LLC

  // dell : 2014-10-24 Dell Inc.

  // deloitte : 2015-07-31 Deloitte Touche Tohmatsu

  // delta : 2015-02-19 Delta Air Lines, Inc.

  // democrat : 2013-10-24 Dog Beach, LLC

  // dental : 2014-03-20 Binky Moon, LLC

  // dentist : 2014-03-20 Dog Beach, LLC

  // desi : 2013-11-14 Desi Networks LLC

  // design : 2014-11-07 Registry Services, LLC

  // dev : 2014-10-16 Charleston Road Registry Inc.

  // dhl : 2015-07-23 Deutsche Post AG

  // diamonds : 2013-09-22 Binky Moon, LLC

  // diet : 2014-06-26 UNR Corp.

  // digital : 2014-03-06 Binky Moon, LLC

  // direct : 2014-04-10 Binky Moon, LLC

  // directory : 2013-09-20 Binky Moon, LLC

  // discount : 2014-03-06 Binky Moon, LLC

  // discover : 2015-07-23 Discover Financial Services

  // dish : 2015-07-30 Dish DBS Corporation

  // diy : 2015-11-05 Lifestyle Domain Holdings, Inc.

  // dnp : 2013-12-13 Dai Nippon Printing Co., Ltd.

  // docs : 2014-10-16 Charleston Road Registry Inc.

  // doctor : 2016-06-02 Binky Moon, LLC

  // dog : 2014-12-04 Binky Moon, LLC

  // domains : 2013-10-17 Binky Moon, LLC

  // dot : 2015-05-21 Dish DBS Corporation

  // download : 2014-11-20 dot Support Limited

  // drive : 2015-03-05 Charleston Road Registry Inc.

  // dtv : 2015-06-04 Dish DBS Corporation

  // dubai : 2015-01-01 Dubai Smart Government Department

  // dunlop : 2015-07-02 The Goodyear Tire & Rubber Company

  // dupont : 2015-06-25 DuPont Specialty Products USA, LLC

  // durban : 2014-03-24 ZA Central Registry NPC trading as ZA Central Registry

  // dvag : 2014-06-23 Deutsche Vermögensberatung Aktiengesellschaft DVAG

  // dvr : 2016-05-26 DISH Technologies L.L.C.

  // earth : 2014-12-04 Interlink Co., Ltd.

  // eat : 2014-01-23 Charleston Road Registry Inc.

  // eco : 2016-07-08 Big Room Inc.

  // edeka : 2014-12-18 EDEKA Verband kaufmännischer Genossenschaften e.V.

  // education : 2013-11-07 Binky Moon, LLC

  // email : 2013-10-31 Binky Moon, LLC

  // emerck : 2014-04-03 Merck KGaA

  // energy : 2014-09-11 Binky Moon, LLC

  // engineer : 2014-03-06 Dog Beach, LLC

  // engineering : 2014-03-06 Binky Moon, LLC

  // enterprises : 2013-09-20 Binky Moon, LLC

  // epson : 2014-12-04 Seiko Epson Corporation

  // equipment : 2013-08-27 Binky Moon, LLC

  // ericsson : 2015-07-09 Telefonaktiebolaget L M Ericsson

  // erni : 2014-04-03 ERNI Group Holding AG

  // esq : 2014-05-08 Charleston Road Registry Inc.

  // estate : 2013-08-27 Binky Moon, LLC

  // etisalat : 2015-09-03 Emirates Telecommunications Corporation (trading as Etisalat)

  // eurovision : 2014-04-24 European Broadcasting Union (EBU)

  // eus : 2013-12-12 Puntueus Fundazioa

  // events : 2013-12-05 Binky Moon, LLC

  // exchange : 2014-03-06 Binky Moon, LLC

  // expert : 2013-11-21 Binky Moon, LLC

  // exposed : 2013-12-05 Binky Moon, LLC

  // express : 2015-02-11 Binky Moon, LLC

  // extraspace : 2015-05-14 Extra Space Storage LLC

  // fage : 2014-12-18 Fage International S.A.

  // fail : 2014-03-06 Binky Moon, LLC

  // fairwinds : 2014-11-13 FairWinds Partners, LLC

  // faith : 2014-11-20 dot Faith Limited

  // family : 2015-04-02 Dog Beach, LLC

  // fan : 2014-03-06 Dog Beach, LLC

  // fans : 2014-11-07 ZDNS International Limited

  // farm : 2013-11-07 Binky Moon, LLC

  // farmers : 2015-07-09 Farmers Insurance Exchange

  // fashion : 2014-07-03 Registry Services, LLC

  // fast : 2014-12-18 Amazon Registry Services, Inc.

  // fedex : 2015-08-06 Federal Express Corporation

  // feedback : 2013-12-19 Top Level Spectrum, Inc.

  // ferrari : 2015-07-31 Fiat Chrysler Automobiles N.V.

  // ferrero : 2014-12-18 Ferrero Trading Lux S.A.

  // fiat : 2015-07-31 Fiat Chrysler Automobiles N.V.

  // fidelity : 2015-07-30 Fidelity Brokerage Services LLC

  // fido : 2015-08-06 Rogers Communications Canada Inc.

  // film : 2015-01-08 Motion Picture Domain Registry Pty Ltd

  // final : 2014-10-16 Núcleo de Informação e Coordenação do Ponto BR - NIC.br

  // finance : 2014-03-20 Binky Moon, LLC

  // financial : 2014-03-06 Binky Moon, LLC

  // fire : 2015-06-25 Amazon Registry Services, Inc.

  // firestone : 2014-12-18 Bridgestone Licensing Services, Inc

  // firmdale : 2014-03-27 Firmdale Holdings Limited

  // fish : 2013-12-12 Binky Moon, LLC

  // fishing : 2013-11-21 Registry Services, LLC

  // fit : 2014-11-07 Registry Services, LLC

  // fitness : 2014-03-06 Binky Moon, LLC

  // flickr : 2015-04-02 Flickr, Inc.

  // flights : 2013-12-05 Binky Moon, LLC

  // flir : 2015-07-23 FLIR Systems, Inc.

  // florist : 2013-11-07 Binky Moon, LLC

  // flowers : 2014-10-09 UNR Corp.

  // fly : 2014-05-08 Charleston Road Registry Inc.

  // foo : 2014-01-23 Charleston Road Registry Inc.

  // food : 2016-04-21 Lifestyle Domain Holdings, Inc.

  // foodnetwork : 2015-07-02 Lifestyle Domain Holdings, Inc.

  // football : 2014-12-18 Binky Moon, LLC

  // ford : 2014-11-13 Ford Motor Company

  // forex : 2014-12-11 Dog Beach, LLC

  // forsale : 2014-05-22 Dog Beach, LLC

  // forum : 2015-04-02 Fegistry, LLC

  // foundation : 2013-12-05 Binky Moon, LLC

  // fox : 2015-09-11 FOX Registry, LLC

  // free : 2015-12-10 Amazon Registry Services, Inc.

  // fresenius : 2015-07-30 Fresenius Immobilien-Verwaltungs-GmbH

  // frl : 2014-05-15 FRLregistry B.V.

  // frogans : 2013-12-19 OP3FT

  // frontdoor : 2015-07-02 Lifestyle Domain Holdings, Inc.

  // frontier : 2015-02-05 Frontier Communications Corporation

  // ftr : 2015-07-16 Frontier Communications Corporation

  // fujitsu : 2015-07-30 Fujitsu Limited

  // fun : 2016-01-14 Radix FZC

  // fund : 2014-03-20 Binky Moon, LLC

  // furniture : 2014-03-20 Binky Moon, LLC

  // futbol : 2013-09-20 Dog Beach, LLC

  // fyi : 2015-04-02 Binky Moon, LLC

  // gal : 2013-11-07 Asociación puntoGAL

  // gallery : 2013-09-13 Binky Moon, LLC

  // gallo : 2015-06-11 Gallo Vineyards, Inc.

  // gallup : 2015-02-19 Gallup, Inc.

  // game : 2015-05-28 UNR Corp.

  // games : 2015-05-28 Dog Beach, LLC

  // gap : 2015-07-31 The Gap, Inc.

  // garden : 2014-06-26 Registry Services, LLC

  // gay : 2019-05-23 Top Level Design, LLC

  // gbiz : 2014-07-17 Charleston Road Registry Inc.

  // gdn : 2014-07-31 Joint Stock Company "Navigation-information systems"

  // gea : 2014-12-04 GEA Group Aktiengesellschaft

  // gent : 2014-01-23 COMBELL NV

  // genting : 2015-03-12 Resorts World Inc Pte. Ltd.

  // george : 2015-07-31 Wal-Mart Stores, Inc.

  // ggee : 2014-01-09 GMO Internet, Inc.

  // gift : 2013-10-17 DotGift, LLC

  // gifts : 2014-07-03 Binky Moon, LLC

  // gives : 2014-03-06 Dog Beach, LLC

  // giving : 2014-11-13 Giving Limited

  // glass : 2013-11-07 Binky Moon, LLC

  // gle : 2014-07-24 Charleston Road Registry Inc.

  // global : 2014-04-17 Dot Global Domain Registry Limited

  // globo : 2013-12-19 Globo Comunicação e Participações S.A

  // gmail : 2014-05-01 Charleston Road Registry Inc.

  // gmbh : 2016-01-29 Binky Moon, LLC

  // gmo : 2014-01-09 GMO Internet, Inc.

  // gmx : 2014-04-24 1&1 Mail & Media GmbH

  // godaddy : 2015-07-23 Go Daddy East, LLC

  // gold : 2015-01-22 Binky Moon, LLC

  // goldpoint : 2014-11-20 YODOBASHI CAMERA CO.,LTD.

  // golf : 2014-12-18 Binky Moon, LLC

  // goo : 2014-12-18 NTT Resonant Inc.

  // goodyear : 2015-07-02 The Goodyear Tire & Rubber Company

  // goog : 2014-11-20 Charleston Road Registry Inc.

  // google : 2014-07-24 Charleston Road Registry Inc.

  // gop : 2014-01-16 Republican State Leadership Committee, Inc.

  // got : 2014-12-18 Amazon Registry Services, Inc.

  // grainger : 2015-05-07 Grainger Registry Services, LLC

  // graphics : 2013-09-13 Binky Moon, LLC

  // gratis : 2014-03-20 Binky Moon, LLC

  // green : 2014-05-08 Afilias Limited

  // gripe : 2014-03-06 Binky Moon, LLC

  // grocery : 2016-06-16 Wal-Mart Stores, Inc.

  // group : 2014-08-15 Binky Moon, LLC

  // guardian : 2015-07-30 The Guardian Life Insurance Company of America

  // gucci : 2014-11-13 Guccio Gucci S.p.a.

  // guge : 2014-08-28 Charleston Road Registry Inc.

  // guide : 2013-09-13 Binky Moon, LLC

  // guitars : 2013-11-14 UNR Corp.

  // guru : 2013-08-27 Binky Moon, LLC

  // hair : 2015-12-03 XYZ.COM LLC

  // hamburg : 2014-02-20 Hamburg Top-Level-Domain GmbH

  // hangout : 2014-11-13 Charleston Road Registry Inc.

  // haus : 2013-12-05 Dog Beach, LLC

  // hbo : 2015-07-30 HBO Registry Services, Inc.

  // hdfc : 2015-07-30 HOUSING DEVELOPMENT FINANCE CORPORATION LIMITED

  // hdfcbank : 2015-02-12 HDFC Bank Limited

  // health : 2015-02-11 DotHealth, LLC

  // healthcare : 2014-06-12 Binky Moon, LLC

  // help : 2014-06-26 UNR Corp.

  // helsinki : 2015-02-05 City of Helsinki

  // here : 2014-02-06 Charleston Road Registry Inc.

  // hermes : 2014-07-10 HERMES INTERNATIONAL

  // hgtv : 2015-07-02 Lifestyle Domain Holdings, Inc.

  // hiphop : 2014-03-06 UNR Corp.

  // hisamitsu : 2015-07-16 Hisamitsu Pharmaceutical Co.,Inc.

  // hitachi : 2014-10-31 Hitachi, Ltd.

  // hiv : 2014-03-13 UNR Corp.

  // hkt : 2015-05-14 PCCW-HKT DataCom Services Limited

  // hockey : 2015-03-19 Binky Moon, LLC

  // holdings : 2013-08-27 Binky Moon, LLC

  // holiday : 2013-11-07 Binky Moon, LLC

  // homedepot : 2015-04-02 Home Depot Product Authority, LLC

  // homegoods : 2015-07-16 The TJX Companies, Inc.

  // homes : 2014-01-09 XYZ.COM LLC

  // homesense : 2015-07-16 The TJX Companies, Inc.

  // honda : 2014-12-18 Honda Motor Co., Ltd.

  // horse : 2013-11-21 Registry Services, LLC

  // hospital : 2016-10-20 Binky Moon, LLC

  // host : 2014-04-17 Radix FZC

  // hosting : 2014-05-29 UNR Corp.

  // hot : 2015-08-27 Amazon Registry Services, Inc.

  // hoteles : 2015-03-05 Travel Reservations SRL

  // hotels : 2016-04-07 Booking.com B.V.

  // hotmail : 2014-12-18 Microsoft Corporation

  // house : 2013-11-07 Binky Moon, LLC

  // how : 2014-01-23 Charleston Road Registry Inc.

  // hsbc : 2014-10-24 HSBC Global Services (UK) Limited

  // hughes : 2015-07-30 Hughes Satellite Systems Corporation

  // hyatt : 2015-07-30 Hyatt GTLD, L.L.C.

  // hyundai : 2015-07-09 Hyundai Motor Company

  // ibm : 2014-07-31 International Business Machines Corporation

  // icbc : 2015-02-19 Industrial and Commercial Bank of China Limited

  // ice : 2014-10-30 IntercontinentalExchange, Inc.

  // icu : 2015-01-08 ShortDot SA

  // ieee : 2015-07-23 IEEE Global LLC

  // ifm : 2014-01-30 ifm electronic gmbh

  // ikano : 2015-07-09 Ikano S.A.

  // imamat : 2015-08-06 Fondation Aga Khan (Aga Khan Foundation)

  // imdb : 2015-06-25 Amazon Registry Services, Inc.

  // immo : 2014-07-10 Binky Moon, LLC

  // immobilien : 2013-11-07 Dog Beach, LLC

  // inc : 2018-03-10 Intercap Registry Inc.

  // industries : 2013-12-05 Binky Moon, LLC

  // infiniti : 2014-03-27 NISSAN MOTOR CO., LTD.

  // ing : 2014-01-23 Charleston Road Registry Inc.

  // ink : 2013-12-05 Top Level Design, LLC

  // institute : 2013-11-07 Binky Moon, LLC

  // insurance : 2015-02-19 fTLD Registry Services LLC

  // insure : 2014-03-20 Binky Moon, LLC

  // international : 2013-11-07 Binky Moon, LLC

  // intuit : 2015-07-30 Intuit Administrative Services, Inc.

  // investments : 2014-03-20 Binky Moon, LLC

  // ipiranga : 2014-08-28 Ipiranga Produtos de Petroleo S.A.

  // irish : 2014-08-07 Binky Moon, LLC

  // ismaili : 2015-08-06 Fondation Aga Khan (Aga Khan Foundation)

  // ist : 2014-08-28 Istanbul Metropolitan Municipality

  // istanbul : 2014-08-28 Istanbul Metropolitan Municipality

  // itau : 2014-10-02 Itau Unibanco Holding S.A.

  // itv : 2015-07-09 ITV Services Limited

  // jaguar : 2014-11-13 Jaguar Land Rover Ltd

  // java : 2014-06-19 Oracle Corporation

  // jcb : 2014-11-20 JCB Co., Ltd.

  // jeep : 2015-07-30 FCA US LLC.

  // jetzt : 2014-01-09 Binky Moon, LLC

  // jewelry : 2015-03-05 Binky Moon, LLC

  // jio : 2015-04-02 Reliance Industries Limited

  // jll : 2015-04-02 Jones Lang LaSalle Incorporated

  // jmp : 2015-03-26 Matrix IP LLC

  // jnj : 2015-06-18 Johnson & Johnson Services, Inc.

  // joburg : 2014-03-24 ZA Central Registry NPC trading as ZA Central Registry

  // jot : 2014-12-18 Amazon Registry Services, Inc.

  // joy : 2014-12-18 Amazon Registry Services, Inc.

  // jpmorgan : 2015-04-30 JPMorgan Chase Bank, National Association

  // jprs : 2014-09-18 Japan Registry Services Co., Ltd.

  // juegos : 2014-03-20 UNR Corp.

  // juniper : 2015-07-30 JUNIPER NETWORKS, INC.

  // kaufen : 2013-11-07 Dog Beach, LLC

  // kddi : 2014-09-12 KDDI CORPORATION

  // kerryhotels : 2015-04-30 Kerry Trading Co. Limited

  // kerrylogistics : 2015-04-09 Kerry Trading Co. Limited

  // kerryproperties : 2015-04-09 Kerry Trading Co. Limited

  // kfh : 2014-12-04 Kuwait Finance House

  // kia : 2015-07-09 KIA MOTORS CORPORATION

  // kids : 2021-08-13 DotKids Foundation Limited

  // kim : 2013-09-23 Afilias Limited

  // kinder : 2014-11-07 Ferrero Trading Lux S.A.

  // kindle : 2015-06-25 Amazon Registry Services, Inc.

  // kitchen : 2013-09-20 Binky Moon, LLC

  // kiwi : 2013-09-20 DOT KIWI LIMITED

  // koeln : 2014-01-09 dotKoeln GmbH

  // komatsu : 2015-01-08 Komatsu Ltd.

  // kosher : 2015-08-20 Kosher Marketing Assets LLC

  // kpmg : 2015-04-23 KPMG International Cooperative (KPMG International Genossenschaft)

  // kpn : 2015-01-08 Koninklijke KPN N.V.

  // krd : 2013-12-05 KRG Department of Information Technology

  // kred : 2013-12-19 KredTLD Pty Ltd

  // kuokgroup : 2015-04-09 Kerry Trading Co. Limited

  // kyoto : 2014-11-07 Academic Institution: Kyoto Jyoho Gakuen

  // lacaixa : 2014-01-09 Fundación Bancaria Caixa d’Estalvis i Pensions de Barcelona, “la Caixa”

  // lamborghini : 2015-06-04 Automobili Lamborghini S.p.A.

  // lamer : 2015-10-01 The Estée Lauder Companies Inc.

  // lancaster : 2015-02-12 LANCASTER

  // lancia : 2015-07-31 Fiat Chrysler Automobiles N.V.

  // land : 2013-09-10 Binky Moon, LLC

  // landrover : 2014-11-13 Jaguar Land Rover Ltd

  // lanxess : 2015-07-30 LANXESS Corporation

  // lasalle : 2015-04-02 Jones Lang LaSalle Incorporated

  // lat : 2014-10-16 ECOM-LAC Federaciòn de Latinoamèrica y el Caribe para Internet y el Comercio Electrònico

  // latino : 2015-07-30 Dish DBS Corporation

  // latrobe : 2014-06-16 La Trobe University

  // law : 2015-01-22 Registry Services, LLC

  // lawyer : 2014-03-20 Dog Beach, LLC

  // lds : 2014-03-20 IRI Domain Management, LLC

  // lease : 2014-03-06 Binky Moon, LLC

  // leclerc : 2014-08-07 A.C.D. LEC Association des Centres Distributeurs Edouard Leclerc

  // lefrak : 2015-07-16 LeFrak Organization, Inc.

  // legal : 2014-10-16 Binky Moon, LLC

  // lego : 2015-07-16 LEGO Juris A/S

  // lexus : 2015-04-23 TOYOTA MOTOR CORPORATION

  // lgbt : 2014-05-08 Afilias Limited

  // lidl : 2014-09-18 Schwarz Domains und Services GmbH & Co. KG

  // life : 2014-02-06 Binky Moon, LLC

  // lifeinsurance : 2015-01-15 American Council of Life Insurers

  // lifestyle : 2014-12-11 Lifestyle Domain Holdings, Inc.

  // lighting : 2013-08-27 Binky Moon, LLC

  // like : 2014-12-18 Amazon Registry Services, Inc.

  // lilly : 2015-07-31 Eli Lilly and Company

  // limited : 2014-03-06 Binky Moon, LLC

  // limo : 2013-10-17 Binky Moon, LLC

  // lincoln : 2014-11-13 Ford Motor Company

  // linde : 2014-12-04 Linde Aktiengesellschaft

  // link : 2013-11-14 UNR Corp.

  // lipsy : 2015-06-25 Lipsy Ltd

  // live : 2014-12-04 Dog Beach, LLC

  // living : 2015-07-30 Lifestyle Domain Holdings, Inc.

  // lixil : 2015-03-19 LIXIL Group Corporation

  // llc : 2017-12-14 Afilias Limited

  // llp : 2019-08-26 UNR Corp.

  // loan : 2014-11-20 dot Loan Limited

  // loans : 2014-03-20 Binky Moon, LLC

  // locker : 2015-06-04 Dish DBS Corporation

  // locus : 2015-06-25 Locus Analytics LLC

  // loft : 2015-07-30 Annco, Inc.

  // lol : 2015-01-30 UNR Corp.

  // london : 2013-11-14 Dot London Domains Limited

  // lotte : 2014-11-07 Lotte Holdings Co., Ltd.

  // lotto : 2014-04-10 Afilias Limited

  // love : 2014-12-22 Merchant Law Group LLP

  // lpl : 2015-07-30 LPL Holdings, Inc.

  // lplfinancial : 2015-07-30 LPL Holdings, Inc.

  // ltd : 2014-09-25 Binky Moon, LLC

  // ltda : 2014-04-17 InterNetX, Corp

  // lundbeck : 2015-08-06 H. Lundbeck A/S

  // luxe : 2014-01-09 Registry Services, LLC

  // luxury : 2013-10-17 Luxury Partners, LLC

  // macys : 2015-07-31 Macys, Inc.

  // madrid : 2014-05-01 Comunidad de Madrid

  // maif : 2014-10-02 Mutuelle Assurance Instituteur France (MAIF)

  // maison : 2013-12-05 Binky Moon, LLC

  // makeup : 2015-01-15 XYZ.COM LLC

  // man : 2014-12-04 MAN SE

  // management : 2013-11-07 Binky Moon, LLC

  // mango : 2013-10-24 PUNTO FA S.L.

  // map : 2016-06-09 Charleston Road Registry Inc.

  // market : 2014-03-06 Dog Beach, LLC

  // marketing : 2013-11-07 Binky Moon, LLC

  // markets : 2014-12-11 Dog Beach, LLC

  // marriott : 2014-10-09 Marriott Worldwide Corporation

  // marshalls : 2015-07-16 The TJX Companies, Inc.

  // maserati : 2015-07-31 Fiat Chrysler Automobiles N.V.

  // mattel : 2015-08-06 Mattel Sites, Inc.

  // mba : 2015-04-02 Binky Moon, LLC

  // mckinsey : 2015-07-31 McKinsey Holdings, Inc.

  // med : 2015-08-06 Medistry LLC

  // media : 2014-03-06 Binky Moon, LLC

  // meet : 2014-01-16 Charleston Road Registry Inc.

  // melbourne : 2014-05-29 The Crown in right of the State of Victoria, represented by its Department of State Development, Business and Innovation

  // meme : 2014-01-30 Charleston Road Registry Inc.

  // memorial : 2014-10-16 Dog Beach, LLC

  // men : 2015-02-26 Exclusive Registry Limited

  // menu : 2013-09-11 Dot Menu Registry, LLC

  // merckmsd : 2016-07-14 MSD Registry Holdings, Inc.

  // miami : 2013-12-19 Registry Services, LLC

  // microsoft : 2014-12-18 Microsoft Corporation

  // mini : 2014-01-09 Bayerische Motoren Werke Aktiengesellschaft

  // mint : 2015-07-30 Intuit Administrative Services, Inc.

  // mit : 2015-07-02 Massachusetts Institute of Technology

  // mitsubishi : 2015-07-23 Mitsubishi Corporation

  // mlb : 2015-05-21 MLB Advanced Media DH, LLC

  // mls : 2015-04-23 The Canadian Real Estate Association

  // mma : 2014-11-07 MMA IARD

  // mobile : 2016-06-02 Dish DBS Corporation

  // moda : 2013-11-07 Dog Beach, LLC

  // moe : 2013-11-13 Interlink Co., Ltd.

  // moi : 2014-12-18 Amazon Registry Services, Inc.

  // mom : 2015-04-16 UNR Corp.

  // monash : 2013-09-30 Monash University

  // money : 2014-10-16 Binky Moon, LLC

  // monster : 2015-09-11 XYZ.COM LLC

  // mormon : 2013-12-05 IRI Domain Management, LLC

  // mortgage : 2014-03-20 Dog Beach, LLC

  // moscow : 2013-12-19 Foundation for Assistance for Internet Technologies and Infrastructure Development (FAITID)

  // moto : 2015-06-04 Motorola Trademark Holdings, LLC

  // motorcycles : 2014-01-09 XYZ.COM LLC

  // mov : 2014-01-30 Charleston Road Registry Inc.

  // movie : 2015-02-05 Binky Moon, LLC

  // msd : 2015-07-23 MSD Registry Holdings, Inc.

  // mtn : 2014-12-04 MTN Dubai Limited

  // mtr : 2015-03-12 MTR Corporation Limited

  // music : 2021-05-04 DotMusic Limited

  // mutual : 2015-04-02 Northwestern Mutual MU TLD Registry, LLC

  // nab : 2015-08-20 National Australia Bank Limited

  // nagoya : 2013-10-24 GMO Registry, Inc.

  // natura : 2015-03-12 NATURA COSMÉTICOS S.A.

  // navy : 2014-03-06 Dog Beach, LLC

  // nba : 2015-07-31 NBA REGISTRY, LLC

  // nec : 2015-01-08 NEC Corporation

  // netbank : 2014-06-26 COMMONWEALTH BANK OF AUSTRALIA

  // netflix : 2015-06-18 Netflix, Inc.

  // network : 2013-11-14 Binky Moon, LLC

  // neustar : 2013-12-05 NeuStar, Inc.

  // new : 2014-01-30 Charleston Road Registry Inc.

  // news : 2014-12-18 Dog Beach, LLC

  // next : 2015-06-18 Next plc

  // nextdirect : 2015-06-18 Next plc

  // nexus : 2014-07-24 Charleston Road Registry Inc.

  // nfl : 2015-07-23 NFL Reg Ops LLC

  // ngo : 2014-03-06 Public Interest Registry

  // nhk : 2014-02-13 Japan Broadcasting Corporation (NHK)

  // nico : 2014-12-04 DWANGO Co., Ltd.

  // nike : 2015-07-23 NIKE, Inc.

  // nikon : 2015-05-21 NIKON CORPORATION

  // ninja : 2013-11-07 Dog Beach, LLC

  // nissan : 2014-03-27 NISSAN MOTOR CO., LTD.

  // nissay : 2015-10-29 Nippon Life Insurance Company

  // nokia : 2015-01-08 Nokia Corporation

  // northwesternmutual : 2015-06-18 Northwestern Mutual Registry, LLC

  // norton : 2014-12-04 NortonLifeLock Inc.

  // now : 2015-06-25 Amazon Registry Services, Inc.

  // nowruz : 2014-09-04 Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.

  // nowtv : 2015-05-14 Starbucks (HK) Limited

  // nra : 2014-05-22 NRA Holdings Company, INC.

  // nrw : 2013-11-21 Minds + Machines GmbH

  // ntt : 2014-10-31 NIPPON TELEGRAPH AND TELEPHONE CORPORATION

  // nyc : 2014-01-23 The City of New York by and through the New York City Department of Information Technology & Telecommunications

  // obi : 2014-09-25 OBI Group Holding SE & Co. KGaA

  // observer : 2015-04-30 Dog Beach, LLC

  // office : 2015-03-12 Microsoft Corporation

  // okinawa : 2013-12-05 BRregistry, Inc.

  // olayan : 2015-05-14 Crescent Holding GmbH

  // olayangroup : 2015-05-14 Crescent Holding GmbH

  // oldnavy : 2015-07-31 The Gap, Inc.

  // ollo : 2015-06-04 Dish DBS Corporation

  // omega : 2015-01-08 The Swatch Group Ltd

  // one : 2014-11-07 One.com A/S

  // ong : 2014-03-06 Public Interest Registry

  // onl : 2013-09-16 iRegistry GmbH

  // online : 2015-01-15 Radix FZC

  // ooo : 2014-01-09 INFIBEAM AVENUES LIMITED

  // open : 2015-07-31 American Express Travel Related Services Company, Inc.

  // oracle : 2014-06-19 Oracle Corporation

  // orange : 2015-03-12 Orange Brand Services Limited

  // organic : 2014-03-27 Afilias Limited

  // origins : 2015-10-01 The Estée Lauder Companies Inc.

  // osaka : 2014-09-04 Osaka Registry Co., Ltd.

  // otsuka : 2013-10-11 Otsuka Holdings Co., Ltd.

  // ott : 2015-06-04 Dish DBS Corporation

  // ovh : 2014-01-16 MédiaBC

  // page : 2014-12-04 Charleston Road Registry Inc.

  // panasonic : 2015-07-30 Panasonic Corporation

  // paris : 2014-01-30 City of Paris

  // pars : 2014-09-04 Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.

  // partners : 2013-12-05 Binky Moon, LLC

  // parts : 2013-12-05 Binky Moon, LLC

  // party : 2014-09-11 Blue Sky Registry Limited

  // passagens : 2015-03-05 Travel Reservations SRL

  // pay : 2015-08-27 Amazon Registry Services, Inc.

  // pccw : 2015-05-14 PCCW Enterprises Limited

  // pet : 2015-05-07 Afilias Limited

  // pfizer : 2015-09-11 Pfizer Inc.

  // pharmacy : 2014-06-19 National Association of Boards of Pharmacy

  // phd : 2016-07-28 Charleston Road Registry Inc.

  // philips : 2014-11-07 Koninklijke Philips N.V.

  // phone : 2016-06-02 Dish DBS Corporation

  // photo : 2013-11-14 UNR Corp.

  // photography : 2013-09-20 Binky Moon, LLC

  // photos : 2013-10-17 Binky Moon, LLC

  // physio : 2014-05-01 PhysBiz Pty Ltd

  // pics : 2013-11-14 UNR Corp.

  // pictet : 2014-06-26 Pictet Europe S.A.

  // pictures : 2014-03-06 Binky Moon, LLC

  // pid : 2015-01-08 Top Level Spectrum, Inc.

  // pin : 2014-12-18 Amazon Registry Services, Inc.

  // ping : 2015-06-11 Ping Registry Provider, Inc.

  // pink : 2013-10-01 Afilias Limited

  // pioneer : 2015-07-16 Pioneer Corporation

  // pizza : 2014-06-26 Binky Moon, LLC

  // place : 2014-04-24 Binky Moon, LLC

  // play : 2015-03-05 Charleston Road Registry Inc.

  // playstation : 2015-07-02 Sony Interactive Entertainment Inc.

  // plumbing : 2013-09-10 Binky Moon, LLC

  // plus : 2015-02-05 Binky Moon, LLC

  // pnc : 2015-07-02 PNC Domain Co., LLC

  // pohl : 2014-06-23 Deutsche Vermögensberatung Aktiengesellschaft DVAG

  // poker : 2014-07-03 Afilias Limited

  // politie : 2015-08-20 Politie Nederland

  // porn : 2014-10-16 ICM Registry PN LLC

  // pramerica : 2015-07-30 Prudential Financial, Inc.

  // praxi : 2013-12-05 Praxi S.p.A.

  // press : 2014-04-03 Radix FZC

  // prime : 2015-06-25 Amazon Registry Services, Inc.

  // prod : 2014-01-23 Charleston Road Registry Inc.

  // productions : 2013-12-05 Binky Moon, LLC

  // prof : 2014-07-24 Charleston Road Registry Inc.

  // progressive : 2015-07-23 Progressive Casualty Insurance Company

  // promo : 2014-12-18 Afilias Limited

  // properties : 2013-12-05 Binky Moon, LLC

  // property : 2014-05-22 UNR Corp.

  // protection : 2015-04-23 XYZ.COM LLC

  // pru : 2015-07-30 Prudential Financial, Inc.

  // prudential : 2015-07-30 Prudential Financial, Inc.

  // pub : 2013-12-12 Dog Beach, LLC

  // pwc : 2015-10-29 PricewaterhouseCoopers LLP

  // qpon : 2013-11-14 dotCOOL, Inc.

  // quebec : 2013-12-19 PointQuébec Inc

  // quest : 2015-03-26 XYZ.COM LLC

  // racing : 2014-12-04 Premier Registry Limited

  // radio : 2016-07-21 European Broadcasting Union (EBU)

  // read : 2014-12-18 Amazon Registry Services, Inc.

  // realestate : 2015-09-11 dotRealEstate LLC

  // realtor : 2014-05-29 Real Estate Domains LLC

  // realty : 2015-03-19 Dog Beach, LLC

  // recipes : 2013-10-17 Binky Moon, LLC

  // red : 2013-11-07 Afilias Limited

  // redstone : 2014-10-31 Redstone Haute Couture Co., Ltd.

  // redumbrella : 2015-03-26 Travelers TLD, LLC

  // rehab : 2014-03-06 Dog Beach, LLC

  // reise : 2014-03-13 Binky Moon, LLC

  // reisen : 2014-03-06 Binky Moon, LLC

  // reit : 2014-09-04 National Association of Real Estate Investment Trusts, Inc.

  // reliance : 2015-04-02 Reliance Industries Limited

  // ren : 2013-12-12 ZDNS International Limited

  // rent : 2014-12-04 XYZ.COM LLC

  // rentals : 2013-12-05 Binky Moon, LLC

  // repair : 2013-11-07 Binky Moon, LLC

  // report : 2013-12-05 Binky Moon, LLC

  // republican : 2014-03-20 Dog Beach, LLC

  // rest : 2013-12-19 Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable

  // restaurant : 2014-07-03 Binky Moon, LLC

  // review : 2014-11-20 dot Review Limited

  // reviews : 2013-09-13 Dog Beach, LLC

  // rexroth : 2015-06-18 Robert Bosch GMBH

  // rich : 2013-11-21 iRegistry GmbH

  // richardli : 2015-05-14 Pacific Century Asset Management (HK) Limited

  // ricoh : 2014-11-20 Ricoh Company, Ltd.

  // ril : 2015-04-02 Reliance Industries Limited

  // rio : 2014-02-27 Empresa Municipal de Informática SA - IPLANRIO

  // rip : 2014-07-10 Dog Beach, LLC

  // rocher : 2014-12-18 Ferrero Trading Lux S.A.

  // rocks : 2013-11-14 Dog Beach, LLC

  // rodeo : 2013-12-19 Registry Services, LLC

  // rogers : 2015-08-06 Rogers Communications Canada Inc.

  // room : 2014-12-18 Amazon Registry Services, Inc.

  // rsvp : 2014-05-08 Charleston Road Registry Inc.

  // rugby : 2016-12-15 World Rugby Strategic Developments Limited

  // ruhr : 2013-10-02 regiodot GmbH & Co. KG

  // run : 2015-03-19 Binky Moon, LLC

  // rwe : 2015-04-02 RWE AG

  // ryukyu : 2014-01-09 BRregistry, Inc.

  // saarland : 2013-12-12 dotSaarland GmbH

  // safe : 2014-12-18 Amazon Registry Services, Inc.

  // safety : 2015-01-08 Safety Registry Services, LLC.

  // sakura : 2014-12-18 SAKURA Internet Inc.

  // sale : 2014-10-16 Dog Beach, LLC

  // salon : 2014-12-11 Binky Moon, LLC

  // samsclub : 2015-07-31 Wal-Mart Stores, Inc.

  // samsung : 2014-04-03 SAMSUNG SDS CO., LTD

  // sandvik : 2014-11-13 Sandvik AB

  // sandvikcoromant : 2014-11-07 Sandvik AB

  // sanofi : 2014-10-09 Sanofi

  // sap : 2014-03-27 SAP AG

  // sarl : 2014-07-03 Binky Moon, LLC

  // sas : 2015-04-02 Research IP LLC

  // save : 2015-06-25 Amazon Registry Services, Inc.

  // saxo : 2014-10-31 Saxo Bank A/S

  // sbi : 2015-03-12 STATE BANK OF INDIA

  // sbs : 2014-11-07 ShortDot SA

  // sca : 2014-03-13 SVENSKA CELLULOSA AKTIEBOLAGET SCA (publ)

  // scb : 2014-02-20 The Siam Commercial Bank Public Company Limited ("SCB")

  // schaeffler : 2015-08-06 Schaeffler Technologies AG & Co. KG

  // schmidt : 2014-04-03 SCHMIDT GROUPE S.A.S.

  // scholarships : 2014-04-24 Scholarships.com, LLC

  // school : 2014-12-18 Binky Moon, LLC

  // schule : 2014-03-06 Binky Moon, LLC

  // schwarz : 2014-09-18 Schwarz Domains und Services GmbH & Co. KG

  // science : 2014-09-11 dot Science Limited

  // scot : 2014-01-23 Dot Scot Registry Limited

  // search : 2016-06-09 Charleston Road Registry Inc.

  // seat : 2014-05-22 SEAT, S.A. (Sociedad Unipersonal)

  // secure : 2015-08-27 Amazon Registry Services, Inc.

  // security : 2015-05-14 XYZ.COM LLC

  // seek : 2014-12-04 Seek Limited

  // select : 2015-10-08 Registry Services, LLC

  // sener : 2014-10-24 Sener Ingeniería y Sistemas, S.A.

  // services : 2014-02-27 Binky Moon, LLC

  // ses : 2015-07-23 SES

  // seven : 2015-08-06 Seven West Media Ltd

  // sew : 2014-07-17 SEW-EURODRIVE GmbH & Co KG

  // sex : 2014-11-13 ICM Registry SX LLC

  // sexy : 2013-09-11 UNR Corp.

  // sfr : 2015-08-13 Societe Francaise du Radiotelephone - SFR

  // shangrila : 2015-09-03 Shangri‐La International Hotel Management Limited

  // sharp : 2014-05-01 Sharp Corporation

  // shaw : 2015-04-23 Shaw Cablesystems G.P.

  // shell : 2015-07-30 Shell Information Technology International Inc

  // shia : 2014-09-04 Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.

  // shiksha : 2013-11-14 Afilias Limited

  // shoes : 2013-10-02 Binky Moon, LLC

  // shop : 2016-04-08 GMO Registry, Inc.

  // shopping : 2016-03-31 Binky Moon, LLC

  // shouji : 2015-01-08 Beijing Qihu Keji Co., Ltd.

  // show : 2015-03-05 Binky Moon, LLC

  // showtime : 2015-08-06 CBS Domains Inc.

  // silk : 2015-06-25 Amazon Registry Services, Inc.

  // sina : 2015-03-12 Sina Corporation

  // singles : 2013-08-27 Binky Moon, LLC

  // site : 2015-01-15 Radix FZC

  // ski : 2015-04-09 Afilias Limited

  // skin : 2015-01-15 XYZ.COM LLC

  // sky : 2014-06-19 Sky International AG

  // skype : 2014-12-18 Microsoft Corporation

  // sling : 2015-07-30 DISH Technologies L.L.C.

  // smart : 2015-07-09 Smart Communications, Inc. (SMART)

  // smile : 2014-12-18 Amazon Registry Services, Inc.

  // sncf : 2015-02-19 Société Nationale des Chemins de fer Francais S N C F

  // soccer : 2015-03-26 Binky Moon, LLC

  // social : 2013-11-07 Dog Beach, LLC

  // softbank : 2015-07-02 SoftBank Group Corp.

  // software : 2014-03-20 Dog Beach, LLC

  // sohu : 2013-12-19 Sohu.com Limited

  // solar : 2013-11-07 Binky Moon, LLC

  // solutions : 2013-11-07 Binky Moon, LLC

  // song : 2015-02-26 Amazon Registry Services, Inc.

  // sony : 2015-01-08 Sony Corporation

  // soy : 2014-01-23 Charleston Road Registry Inc.

  // spa : 2019-09-19 Asia Spa and Wellness Promotion Council Limited

  // space : 2014-04-03 Radix FZC

  // sport : 2017-11-16 Global Association of International Sports Federations (GAISF)

  // spot : 2015-02-26 Amazon Registry Services, Inc.

  // srl : 2015-05-07 InterNetX, Corp

  // stada : 2014-11-13 STADA Arzneimittel AG

  // staples : 2015-07-30 Staples, Inc.

  // star : 2015-01-08 Star India Private Limited

  // statebank : 2015-03-12 STATE BANK OF INDIA

  // statefarm : 2015-07-30 State Farm Mutual Automobile Insurance Company

  // stc : 2014-10-09 Saudi Telecom Company

  // stcgroup : 2014-10-09 Saudi Telecom Company

  // stockholm : 2014-12-18 Stockholms kommun

  // storage : 2014-12-22 XYZ.COM LLC

  // store : 2015-04-09 Radix FZC

  // stream : 2016-01-08 dot Stream Limited

  // studio : 2015-02-11 Dog Beach, LLC

  // study : 2014-12-11 OPEN UNIVERSITIES AUSTRALIA PTY LTD

  // style : 2014-12-04 Binky Moon, LLC

  // sucks : 2014-12-22 Vox Populi Registry Ltd.

  // supplies : 2013-12-19 Binky Moon, LLC

  // supply : 2013-12-19 Binky Moon, LLC

  // support : 2013-10-24 Binky Moon, LLC

  // surf : 2014-01-09 Registry Services, LLC

  // surgery : 2014-03-20 Binky Moon, LLC

  // suzuki : 2014-02-20 SUZUKI MOTOR CORPORATION

  // swatch : 2015-01-08 The Swatch Group Ltd

  // swiss : 2014-10-16 Swiss Confederation

  // sydney : 2014-09-18 State of New South Wales, Department of Premier and Cabinet

  // systems : 2013-11-07 Binky Moon, LLC

  // tab : 2014-12-04 Tabcorp Holdings Limited

  // taipei : 2014-07-10 Taipei City Government

  // talk : 2015-04-09 Amazon Registry Services, Inc.

  // taobao : 2015-01-15 Alibaba Group Holding Limited

  // target : 2015-07-31 Target Domain Holdings, LLC

  // tatamotors : 2015-03-12 Tata Motors Ltd

  // tatar : 2014-04-24 Limited Liability Company "Coordination Center of Regional Domain of Tatarstan Republic"

  // tattoo : 2013-08-30 UNR Corp.

  // tax : 2014-03-20 Binky Moon, LLC

  // taxi : 2015-03-19 Binky Moon, LLC

  // tci : 2014-09-12 Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.

  // tdk : 2015-06-11 TDK Corporation

  // team : 2015-03-05 Binky Moon, LLC

  // tech : 2015-01-30 Radix FZC

  // technology : 2013-09-13 Binky Moon, LLC

  // temasek : 2014-08-07 Temasek Holdings (Private) Limited

  // tennis : 2014-12-04 Binky Moon, LLC

  // teva : 2015-07-02 Teva Pharmaceutical Industries Limited

  // thd : 2015-04-02 Home Depot Product Authority, LLC

  // theater : 2015-03-19 Binky Moon, LLC

  // theatre : 2015-05-07 XYZ.COM LLC

  // tiaa : 2015-07-23 Teachers Insurance and Annuity Association of America

  // tickets : 2015-02-05 XYZ.COM LLC

  // tienda : 2013-11-14 Binky Moon, LLC

  // tiffany : 2015-01-30 Tiffany and Company

  // tips : 2013-09-20 Binky Moon, LLC

  // tires : 2014-11-07 Binky Moon, LLC

  // tirol : 2014-04-24 punkt Tirol GmbH

  // tjmaxx : 2015-07-16 The TJX Companies, Inc.

  // tjx : 2015-07-16 The TJX Companies, Inc.

  // tkmaxx : 2015-07-16 The TJX Companies, Inc.

  // tmall : 2015-01-15 Alibaba Group Holding Limited

  // today : 2013-09-20 Binky Moon, LLC

  // tokyo : 2013-11-13 GMO Registry, Inc.

  // tools : 2013-11-21 Binky Moon, LLC

  // top : 2014-03-20 .TOP Registry

  // toray : 2014-12-18 Toray Industries, Inc.

  // toshiba : 2014-04-10 TOSHIBA Corporation

  // total : 2015-08-06 Total SA

  // tours : 2015-01-22 Binky Moon, LLC

  // town : 2014-03-06 Binky Moon, LLC

  // toyota : 2015-04-23 TOYOTA MOTOR CORPORATION

  // toys : 2014-03-06 Binky Moon, LLC

  // trade : 2014-01-23 Elite Registry Limited

  // trading : 2014-12-11 Dog Beach, LLC

  // training : 2013-11-07 Binky Moon, LLC

  // travel : 2015-10-09 Dog Beach, LLC

  // travelchannel : 2015-07-02 Lifestyle Domain Holdings, Inc.

  // travelers : 2015-03-26 Travelers TLD, LLC

  // travelersinsurance : 2015-03-26 Travelers TLD, LLC

  // trust : 2014-10-16 UNR Corp.

  // trv : 2015-03-26 Travelers TLD, LLC

  // tube : 2015-06-11 Latin American Telecom LLC

  // tui : 2014-07-03 TUI AG

  // tunes : 2015-02-26 Amazon Registry Services, Inc.

  // tushu : 2014-12-18 Amazon Registry Services, Inc.

  // tvs : 2015-02-19 T V SUNDRAM IYENGAR  & SONS LIMITED

  // ubank : 2015-08-20 National Australia Bank Limited

  // ubs : 2014-12-11 UBS AG

  // unicom : 2015-10-15 China United Network Communications Corporation Limited

  // university : 2014-03-06 Binky Moon, LLC

  // uno : 2013-09-11 Radix FZC

  // uol : 2014-05-01 UBN INTERNET LTDA.

  // ups : 2015-06-25 UPS Market Driver, Inc.

  // vacations : 2013-12-05 Binky Moon, LLC

  // vana : 2014-12-11 Lifestyle Domain Holdings, Inc.

  // vanguard : 2015-09-03 The Vanguard Group, Inc.

  // vegas : 2014-01-16 Dot Vegas, Inc.

  // ventures : 2013-08-27 Binky Moon, LLC

  // verisign : 2015-08-13 VeriSign, Inc.

  // versicherung : 2014-03-20 tldbox GmbH

  // vet : 2014-03-06 Dog Beach, LLC

  // viajes : 2013-10-17 Binky Moon, LLC

  // video : 2014-10-16 Dog Beach, LLC

  // vig : 2015-05-14 VIENNA INSURANCE GROUP AG Wiener Versicherung Gruppe

  // viking : 2015-04-02 Viking River Cruises (Bermuda) Ltd.

  // villas : 2013-12-05 Binky Moon, LLC

  // vin : 2015-06-18 Binky Moon, LLC

  // vip : 2015-01-22 Registry Services, LLC

  // virgin : 2014-09-25 Virgin Enterprises Limited

  // visa : 2015-07-30 Visa Worldwide Pte. Limited

  // vision : 2013-12-05 Binky Moon, LLC

  // viva : 2014-11-07 Saudi Telecom Company

  // vivo : 2015-07-31 Telefonica Brasil S.A.

  // vlaanderen : 2014-02-06 DNS.be vzw

  // vodka : 2013-12-19 Registry Services, LLC

  // volkswagen : 2015-05-14 Volkswagen Group of America Inc.

  // volvo : 2015-11-12 Volvo Holding Sverige Aktiebolag

  // vote : 2013-11-21 Monolith Registry LLC

  // voting : 2013-11-13 Valuetainment Corp.

  // voto : 2013-11-21 Monolith Registry LLC

  // voyage : 2013-08-27 Binky Moon, LLC

  // vuelos : 2015-03-05 Travel Reservations SRL

  // wales : 2014-05-08 Nominet UK

  // walmart : 2015-07-31 Wal-Mart Stores, Inc.

  // walter : 2014-11-13 Sandvik AB

  // wang : 2013-10-24 Zodiac Wang Limited

  // wanggou : 2014-12-18 Amazon Registry Services, Inc.

  // watch : 2013-11-14 Binky Moon, LLC

  // watches : 2014-12-22 Afilias Limited

  // weather : 2015-01-08 International Business Machines Corporation

  // weatherchannel : 2015-03-12 International Business Machines Corporation

  // webcam : 2014-01-23 dot Webcam Limited

  // weber : 2015-06-04 Saint-Gobain Weber SA

  // website : 2014-04-03 Radix FZC

  // wedding : 2014-04-24 Registry Services, LLC

  // weibo : 2015-03-05 Sina Corporation

  // weir : 2015-01-29 Weir Group IP Limited

  // whoswho : 2014-02-20 Who's Who Registry

  // wien : 2013-10-28 punkt.wien GmbH

  // wiki : 2013-11-07 Top Level Design, LLC

  // williamhill : 2014-03-13 William Hill Organization Limited

  // win : 2014-11-20 First Registry Limited

  // windows : 2014-12-18 Microsoft Corporation

  // wine : 2015-06-18 Binky Moon, LLC

  // winners : 2015-07-16 The TJX Companies, Inc.

  // wme : 2014-02-13 William Morris Endeavor Entertainment, LLC

  // wolterskluwer : 2015-08-06 Wolters Kluwer N.V.

  // woodside : 2015-07-09 Woodside Petroleum Limited

  // work : 2013-12-19 Registry Services, LLC

  // works : 2013-11-14 Binky Moon, LLC

  // world : 2014-06-12 Binky Moon, LLC

  // wow : 2015-10-08 Amazon Registry Services, Inc.

  // wtc : 2013-12-19 World Trade Centers Association, Inc.

  // wtf : 2014-03-06 Binky Moon, LLC

  // xbox : 2014-12-18 Microsoft Corporation

  // xerox : 2014-10-24 Xerox DNHC LLC

  // xfinity : 2015-07-09 Comcast IP Holdings I, LLC

  // xihuan : 2015-01-08 Beijing Qihu Keji Co., Ltd.

  // xin : 2014-12-11 Elegant Leader Limited

  // xn--11b4c3d : 2015-01-15 VeriSign Sarl

  // xn--1ck2e1b : 2015-02-26 Amazon Registry Services, Inc.

  // xn--1qqw23a : 2014-01-09 Guangzhou YU Wei Information Technology Co., Ltd.

  // xn--30rr7y : 2014-06-12 Excellent First Limited

  // xn--3bst00m : 2013-09-13 Eagle Horizon Limited

  // xn--3ds443g : 2013-09-08 TLD REGISTRY LIMITED OY

  // xn--3pxu8k : 2015-01-15 VeriSign Sarl

  // xn--42c2d9a : 2015-01-15 VeriSign Sarl

  // xn--45q11c : 2013-11-21 Zodiac Gemini Ltd

  // xn--4gbrim : 2013-10-04 Helium TLDs Ltd

  // xn--55qw42g : 2013-11-08 China Organizational Name Administration Center

  // xn--55qx5d : 2013-11-14 China Internet Network Information Center (CNNIC)

  // xn--5su34j936bgsg : 2015-09-03 Shangri‐La International Hotel Management Limited

  // xn--5tzm5g : 2014-12-22 Global Website TLD Asia Limited

  // xn--6frz82g : 2013-09-23 Afilias Limited

  // xn--6qq986b3xl : 2013-09-13 Tycoon Treasure Limited

  // xn--80adxhks : 2013-12-19 Foundation for Assistance for Internet Technologies and Infrastructure Development (FAITID)

  // xn--80aqecdr1a : 2015-10-21 Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)

  // xn--80asehdb : 2013-07-14 CORE Association

  // xn--80aswg : 2013-07-14 CORE Association

  // xn--8y0a063a : 2015-03-26 China United Network Communications Corporation Limited

  // xn--9dbq2a : 2015-01-15 VeriSign Sarl

  // xn--9et52u : 2014-06-12 RISE VICTORY LIMITED

  // xn--9krt00a : 2015-03-12 Sina Corporation

  // xn--b4w605ferd : 2014-08-07 Temasek Holdings (Private) Limited

  // xn--bck1b9a5dre4c : 2015-02-26 Amazon Registry Services, Inc.

  // xn--c1avg : 2013-11-14 Public Interest Registry

  // xn--c2br7g : 2015-01-15 VeriSign Sarl

  // xn--cck2b3b : 2015-02-26 Amazon Registry Services, Inc.

  // xn--cckwcxetd : 2019-12-19 Amazon Registry Services, Inc.

  // xn--cg4bki : 2013-09-27 SAMSUNG SDS CO., LTD

  // xn--czr694b : 2014-01-16 Internet DotTrademark Organisation Limited

  // xn--czrs0t : 2013-12-19 Binky Moon, LLC

  // xn--czru2d : 2013-11-21 Zodiac Aquarius Limited

  // xn--d1acj3b : 2013-11-20 The Foundation for Network Initiatives “The Smart Internet”

  // xn--eckvdtc9d : 2014-12-18 Amazon Registry Services, Inc.

  // xn--efvy88h : 2014-08-22 Guangzhou YU Wei Information Technology Co., Ltd.

  // xn--fct429k : 2015-04-09 Amazon Registry Services, Inc.

  // xn--fhbei : 2015-01-15 VeriSign Sarl

  // xn--fiq228c5hs : 2013-09-08 TLD REGISTRY LIMITED OY

  // xn--fiq64b : 2013-10-14 CITIC Group Corporation

  // xn--fjq720a : 2014-05-22 Binky Moon, LLC

  // xn--flw351e : 2014-07-31 Charleston Road Registry Inc.

  // xn--fzys8d69uvgm : 2015-05-14 PCCW Enterprises Limited

  // xn--g2xx48c : 2015-01-30 Nawang Heli(Xiamen) Network Service Co., LTD.

  // xn--gckr3f0f : 2015-02-26 Amazon Registry Services, Inc.

  // xn--gk3at1e : 2015-10-08 Amazon Registry Services, Inc.

  // xn--hxt814e : 2014-05-15 Zodiac Taurus Limited

  // xn--i1b6b1a6a2e : 2013-11-14 Public Interest Registry

  // xn--imr513n : 2014-12-11 Internet DotTrademark Organisation Limited

  // xn--io0a7i : 2013-11-14 China Internet Network Information Center (CNNIC)

  // xn--j1aef : 2015-01-15 VeriSign Sarl

  // xn--jlq480n2rg : 2019-12-19 Amazon Registry Services, Inc.

  // xn--jlq61u9w7b : 2015-01-08 Nokia Corporation

  // xn--jvr189m : 2015-02-26 Amazon Registry Services, Inc.

  // xn--kcrx77d1x4a : 2014-11-07 Koninklijke Philips N.V.

  // xn--kput3i : 2014-02-13 Beijing RITT-Net Technology Development Co., Ltd

  // xn--mgba3a3ejt : 2014-11-20 Aramco Services Company

  // xn--mgba7c0bbn0a : 2015-05-14 Crescent Holding GmbH

  // xn--mgbaakc7dvf : 2015-09-03 Emirates Telecommunications Corporation (trading as Etisalat)

  // xn--mgbab2bd : 2013-10-31 CORE Association

  // xn--mgbca7dzdo : 2015-07-30 Abu Dhabi Systems and Information Centre

  // xn--mgbi4ecexp : 2015-10-21 Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)

  // xn--mgbt3dhd : 2014-09-04 Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.

  // xn--mk1bu44c : 2015-01-15 VeriSign Sarl

  // xn--mxtq1m : 2014-03-06 Net-Chinese Co., Ltd.

  // xn--ngbc5azd : 2013-07-13 International Domain Registry Pty. Ltd.

  // xn--ngbe9e0a : 2014-12-04 Kuwait Finance House

  // xn--ngbrx : 2015-11-12 League of Arab States

  // xn--nqv7f : 2013-11-14 Public Interest Registry

  // xn--nqv7fs00ema : 2013-11-14 Public Interest Registry

  // xn--nyqy26a : 2014-11-07 Stable Tone Limited

  // xn--otu796d : 2017-08-06 Jiang Yu Liang Cai Technology Company Limited

  // xn--p1acf : 2013-12-12 Rusnames Limited

  // xn--pssy2u : 2015-01-15 VeriSign Sarl

  // xn--q9jyb4c : 2013-09-17 Charleston Road Registry Inc.

  // xn--qcka1pmc : 2014-07-31 Charleston Road Registry Inc.

  // xn--rhqv96g : 2013-09-11 Stable Tone Limited

  // xn--rovu88b : 2015-02-26 Amazon Registry Services, Inc.

  // xn--ses554g : 2014-01-16 KNET Co., Ltd.

  // xn--t60b56a : 2015-01-15 VeriSign Sarl

  // xn--tckwe : 2015-01-15 VeriSign Sarl

  // xn--tiq49xqyj : 2015-10-21 Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)

  // xn--unup4y : 2013-07-14 Binky Moon, LLC

  // xn--vermgensberater-ctb : 2014-06-23 Deutsche Vermögensberatung Aktiengesellschaft DVAG

  // xn--vermgensberatung-pwb : 2014-06-23 Deutsche Vermögensberatung Aktiengesellschaft DVAG

  // xn--vhquv : 2013-08-27 Binky Moon, LLC

  // xn--vuq861b : 2014-10-16 Beijing Tele-info Network Technology Co., Ltd.

  // xn--w4r85el8fhu5dnra : 2015-04-30 Kerry Trading Co. Limited

  // xn--w4rs40l : 2015-07-30 Kerry Trading Co. Limited

  // xn--xhq521b : 2013-11-14 Guangzhou YU Wei Information Technology Co., Ltd.

  // xn--zfr164b : 2013-11-08 China Organizational Name Administration Center

  // xyz : 2013-12-05 XYZ.COM LLC

  // yachts : 2014-01-09 XYZ.COM LLC

  // yahoo : 2015-04-02 Oath Inc.

  // yamaxun : 2014-12-18 Amazon Registry Services, Inc.

  // yandex : 2014-04-10 Yandex Europe B.V.

  // yodobashi : 2014-11-20 YODOBASHI CAMERA CO.,LTD.

  // yoga : 2014-05-29 Registry Services, LLC

  // yokohama : 2013-12-12 GMO Registry, Inc.

  // you : 2015-04-09 Amazon Registry Services, Inc.

  // youtube : 2014-05-01 Charleston Road Registry Inc.

  // yun : 2015-01-08 Beijing Qihu Keji Co., Ltd.

  // zappos : 2015-06-25 Amazon Registry Services, Inc.

  // zara : 2014-11-07 Industria de Diseño Textil, S.A. (INDITEX, S.A.)

  // zero : 2014-12-18 Amazon Registry Services, Inc.

  // zip : 2014-05-08 Charleston Road Registry Inc.

  // zone : 2013-11-14 Binky Moon, LLC

  // zuerich : 2014-11-07 Kanton Zürich (Canton of Zurich)

  // ===END ICANN DOMAINS===
  // ===BEGIN PRIVATE DOMAINS===
  // (Note: these are in alphabetical order by company name)

  // 1GB LLC : https://www.1gb.ua/
  // Submitted by 1GB LLC <noc@1gb.com.ua>
  'cc.ua',
  'inf.ua',
  'ltd.ua',

  // 611coin : https://611project.org/
  '611.to',

  // Aaron Marais' Gitlab pages: https://lab.aaronleem.co.za
  // Submitted by Aaron Marais <its_me@aaronleem.co.za>
  'graphox.us',

  // accesso Technology Group, plc. : https://accesso.com/
  // Submitted by accesso Team <accessoecommerce@accesso.com>
  'devcdnaccesso.com',

  // Adobe : https://www.adobe.com/
  // Submitted by Ian Boston <boston@adobe.com> and Lars Trieloff <trieloff@adobe.com>
  'adobeaemcloud.com',
  'dev.adobeaemcloud.com',
  'hlx.live',
  'adobeaemcloud.net',
  'hlx.page',
  'hlx3.page',

  // Agnat sp. z o.o. : https://domena.pl
  // Submitted by Przemyslaw Plewa <it-admin@domena.pl>
  'beep.pl',

  // alboto.ca : http://alboto.ca
  // Submitted by Anton Avramov <avramov@alboto.ca>
  'barsy.ca',

  // Alces Software Ltd : http://alces-software.com
  // Submitted by Mark J. Titorenko <mark.titorenko@alces-software.com>
  'compute.estate',
  'alces.network',

  // all-inkl.com : https://all-inkl.com
  // Submitted by Werner Kaltofen <wk@all-inkl.com>
  'kasserver.com',

  // Altervista: https://www.altervista.org
  // Submitted by Carlo Cannas <tech_staff@altervista.it>
  'altervista.org',

  // alwaysdata : https://www.alwaysdata.com
  // Submitted by Cyril <admin@alwaysdata.com>
  'alwaysdata.net',

  // Amazon CloudFront : https://aws.amazon.com/cloudfront/
  // Submitted by Donavan Miller <donavanm@amazon.com>
  'cloudfront.net',

  // Amazon Elastic Compute Cloud : https://aws.amazon.com/ec2/
  // Submitted by Luke Wells <psl-maintainers@amazon.com>
  'compute.amazonaws.com',
  'compute-1.amazonaws.com',
  'compute.amazonaws.com.cn',
  'us-east-1.amazonaws.com',

  // Amazon Elastic Beanstalk : https://aws.amazon.com/elasticbeanstalk/
  // Submitted by Luke Wells <psl-maintainers@amazon.com>
  'cn-north-1.eb.amazonaws.com.cn',
  'cn-northwest-1.eb.amazonaws.com.cn',
  'elasticbeanstalk.com',
  'ap-northeast-1.elasticbeanstalk.com',
  'ap-northeast-2.elasticbeanstalk.com',
  'ap-northeast-3.elasticbeanstalk.com',
  'ap-south-1.elasticbeanstalk.com',
  'ap-southeast-1.elasticbeanstalk.com',
  'ap-southeast-2.elasticbeanstalk.com',
  'ca-central-1.elasticbeanstalk.com',
  'eu-central-1.elasticbeanstalk.com',
  'eu-west-1.elasticbeanstalk.com',
  'eu-west-2.elasticbeanstalk.com',
  'eu-west-3.elasticbeanstalk.com',
  'sa-east-1.elasticbeanstalk.com',
  'us-east-1.elasticbeanstalk.com',
  'us-east-2.elasticbeanstalk.com',
  'us-gov-west-1.elasticbeanstalk.com',
  'us-west-1.elasticbeanstalk.com',
  'us-west-2.elasticbeanstalk.com',

  // Amazon Elastic Load Balancing : https://aws.amazon.com/elasticloadbalancing/
  // Submitted by Luke Wells <psl-maintainers@amazon.com>
  'elb.amazonaws.com',
  'elb.amazonaws.com.cn',

  // Amazon Global Accelerator : https://aws.amazon.com/global-accelerator/
  // Submitted by Daniel Massaguer <psl-maintainers@amazon.com>
  'awsglobalaccelerator.com',

  // Amazon S3 : https://aws.amazon.com/s3/
  // Submitted by Luke Wells <psl-maintainers@amazon.com>
  's3.amazonaws.com',
  's3-ap-northeast-1.amazonaws.com',
  's3-ap-northeast-2.amazonaws.com',
  's3-ap-south-1.amazonaws.com',
  's3-ap-southeast-1.amazonaws.com',
  's3-ap-southeast-2.amazonaws.com',
  's3-ca-central-1.amazonaws.com',
  's3-eu-central-1.amazonaws.com',
  's3-eu-west-1.amazonaws.com',
  's3-eu-west-2.amazonaws.com',
  's3-eu-west-3.amazonaws.com',
  's3-external-1.amazonaws.com',
  's3-fips-us-gov-west-1.amazonaws.com',
  's3-sa-east-1.amazonaws.com',
  's3-us-gov-west-1.amazonaws.com',
  's3-us-east-2.amazonaws.com',
  's3-us-west-1.amazonaws.com',
  's3-us-west-2.amazonaws.com',
  's3.ap-northeast-2.amazonaws.com',
  's3.ap-south-1.amazonaws.com',
  's3.cn-north-1.amazonaws.com.cn',
  's3.ca-central-1.amazonaws.com',
  's3.eu-central-1.amazonaws.com',
  's3.eu-west-2.amazonaws.com',
  's3.eu-west-3.amazonaws.com',
  's3.us-east-2.amazonaws.com',
  's3.dualstack.ap-northeast-1.amazonaws.com',
  's3.dualstack.ap-northeast-2.amazonaws.com',
  's3.dualstack.ap-south-1.amazonaws.com',
  's3.dualstack.ap-southeast-1.amazonaws.com',
  's3.dualstack.ap-southeast-2.amazonaws.com',
  's3.dualstack.ca-central-1.amazonaws.com',
  's3.dualstack.eu-central-1.amazonaws.com',
  's3.dualstack.eu-west-1.amazonaws.com',
  's3.dualstack.eu-west-2.amazonaws.com',
  's3.dualstack.eu-west-3.amazonaws.com',
  's3.dualstack.sa-east-1.amazonaws.com',
  's3.dualstack.us-east-1.amazonaws.com',
  's3.dualstack.us-east-2.amazonaws.com',
  's3-website-us-east-1.amazonaws.com',
  's3-website-us-west-1.amazonaws.com',
  's3-website-us-west-2.amazonaws.com',
  's3-website-ap-northeast-1.amazonaws.com',
  's3-website-ap-southeast-1.amazonaws.com',
  's3-website-ap-southeast-2.amazonaws.com',
  's3-website-eu-west-1.amazonaws.com',
  's3-website-sa-east-1.amazonaws.com',
  's3-website.ap-northeast-2.amazonaws.com',
  's3-website.ap-south-1.amazonaws.com',
  's3-website.ca-central-1.amazonaws.com',
  's3-website.eu-central-1.amazonaws.com',
  's3-website.eu-west-2.amazonaws.com',
  's3-website.eu-west-3.amazonaws.com',
  's3-website.us-east-2.amazonaws.com',

  // Amune : https://amune.org/
  // Submitted by Team Amune <cert@amune.org>
  't3l3p0rt.net',
  'tele.amune.org',

  // Apigee : https://apigee.com/
  // Submitted by Apigee Security Team <security@apigee.com>
  'apigee.io',

  // Apphud : https://apphud.com
  // Submitted by Alexander Selivanov <alex@apphud.com>
  'siiites.com',

  // Appspace : https://www.appspace.com
  // Submitted by Appspace Security Team <security@appspace.com>
  'appspacehosted.com',
  'appspaceusercontent.com',

  // Appudo UG (haftungsbeschränkt) : https://www.appudo.com
  // Submitted by Alexander Hochbaum <admin@appudo.com>
  'appudo.net',

  // Aptible : https://www.aptible.com/
  // Submitted by Thomas Orozco <thomas@aptible.com>
  'on-aptible.com',

  // ASEINet : https://www.aseinet.com/
  // Submitted by Asei SEKIGUCHI <mail@aseinet.com>
  'user.aseinet.ne.jp',
  'gv.vc',
  'd.gv.vc',

  // Asociación Amigos de la Informática "Euskalamiga" : http://encounter.eus/
  // Submitted by Hector Martin <marcan@euskalencounter.org>
  'user.party.eus',

  // Association potager.org : https://potager.org/
  // Submitted by Lunar <jardiniers@potager.org>
  'pimienta.org',
  'poivron.org',
  'potager.org',
  'sweetpepper.org',

  // ASUSTOR Inc. : http://www.asustor.com
  // Submitted by Vincent Tseng <vincenttseng@asustor.com>
  'myasustor.com',

  // Atlassian : https://atlassian.com
  // Submitted by Sam Smyth <devloop@atlassian.com>
  'cdn.prod.atlassian-dev.net',

  // AVM : https://avm.de
  // Submitted by Andreas Weise <a.weise@avm.de>
  'myfritz.net',

  // AVStack Pte. Ltd. : https://avstack.io
  // Submitted by Jasper Hugo <jasper@avstack.io>
  'onavstack.net',

  // AW AdvisorWebsites.com Software Inc : https://advisorwebsites.com
  // Submitted by James Kennedy <domains@advisorwebsites.com>
  'awdev.ca',
  'advisor.ws',

  // AZ.pl sp. z.o.o: https://az.pl
  // Submited by Krzysztof Wolski <krzysztof.wolski@home.eu>
  'ecommerce-shop.pl',

  // b-data GmbH : https://www.b-data.io
  // Submitted by Olivier Benz <olivier.benz@b-data.ch>
  'b-data.io',

  // backplane : https://www.backplane.io
  // Submitted by Anthony Voutas <anthony@backplane.io>
  'backplaneapp.io',

  // Balena : https://www.balena.io
  // Submitted by Petros Angelatos <petrosagg@balena.io>
  'balena-devices.com',

  // University of Banja Luka : https://unibl.org
  // Domains for Republic of Srpska administrative entity.
  // Submitted by Marko Ivanovic <kormang@hotmail.rs>
  'rs.ba',

  // Banzai Cloud
  // Submitted by Janos Matyas <info@banzaicloud.com>
  'banzai.cloud',
  'app.banzaicloud.io',
  'backyards.banzaicloud.io',

  // BASE, Inc. : https://binc.jp
  // Submitted by Yuya NAGASAWA <public-suffix-list@binc.jp>
  'base.ec',
  'official.ec',
  'buyshop.jp',
  'fashionstore.jp',
  'handcrafted.jp',
  'kawaiishop.jp',
  'supersale.jp',
  'theshop.jp',
  'shopselect.net',
  'base.shop',

  // BetaInABox
  // Submitted by Adrian <adrian@betainabox.com>
  'betainabox.com',

  // BinaryLane : http://www.binarylane.com
  // Submitted by Nathan O'Sullivan <nathan@mammoth.com.au>
  'bnr.la',

  // Bitbucket : http://bitbucket.org
  // Submitted by Andy Ortlieb <aortlieb@atlassian.com>
  'bitbucket.io',

  // Blackbaud, Inc. : https://www.blackbaud.com
  // Submitted by Paul Crowder <paul.crowder@blackbaud.com>
  'blackbaudcdn.net',

  // Blatech : http://www.blatech.net
  // Submitted by Luke Bratch <luke@bratch.co.uk>
  'of.je',

  // Blue Bite, LLC : https://bluebite.com
  // Submitted by Joshua Weiss <admin.engineering@bluebite.com>
  'bluebite.io',

  // Boomla : https://boomla.com
  // Submitted by Tibor Halter <thalter@boomla.com>
  'boomla.net',

  // Boutir : https://www.boutir.com
  // Submitted by Eric Ng Ka Ka <ngkaka@boutir.com>
  'boutir.com',

  // Boxfuse : https://boxfuse.com
  // Submitted by Axel Fontaine <axel@boxfuse.com>
  'boxfuse.io',

  // bplaced : https://www.bplaced.net/
  // Submitted by Miroslav Bozic <security@bplaced.net>
  'square7.ch',
  'bplaced.com',
  'bplaced.de',
  'square7.de',
  'bplaced.net',
  'square7.net',

  // Brendly : https://brendly.rs
  // Submitted by Dusan Radovanovic <dusan.radovanovic@brendly.rs>
  'shop.brendly.rs',

  // BrowserSafetyMark
  // Submitted by Dave Tharp <browsersafetymark.io@quicinc.com>
  'browsersafetymark.io',

  // Bytemark Hosting : https://www.bytemark.co.uk
  // Submitted by Paul Cammish <paul.cammish@bytemark.co.uk>
  'uk0.bigv.io',
  'dh.bytemark.co.uk',
  'vm.bytemark.co.uk',

  // Caf.js Labs LLC : https://www.cafjs.com
  // Submitted by Antonio Lain <antlai@cafjs.com>
  'cafjs.com',

  // callidomus : https://www.callidomus.com/
  // Submitted by Marcus Popp <admin@callidomus.com>
  'mycd.eu',

  // Carrd : https://carrd.co
  // Submitted by AJ <aj@carrd.co>
  'drr.ac',
  'uwu.ai',
  'carrd.co',
  'crd.co',
  'ju.mp',

  // CentralNic : http://www.centralnic.com/names/domains
  // Submitted by registry <gavin.brown@centralnic.com>
  'ae.org',
  'br.com',
  'cn.com',
  'com.de',
  'com.se',
  'de.com',
  'eu.com',
  'gb.net',
  'hu.net',
  'jp.net',
  'jpn.com',
  'mex.com',
  'ru.com',
  'sa.com',
  'se.net',
  'uk.com',
  'uk.net',
  'us.com',
  'za.bz',
  'za.com',

  // No longer operated by CentralNic, these entries should be adopted and/or removed by current operators
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'ar.com',
  'hu.com',
  'kr.com',
  'no.com',
  'qc.com',
  'uy.com',

  // Africa.com Web Solutions Ltd : https://registry.africa.com
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'africa.com',

  // iDOT Services Limited : http://www.domain.gr.com
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'gr.com',

  // Radix FZC : http://domains.in.net
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'in.net',
  'web.in',

  // US REGISTRY LLC : http://us.org
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'us.org',

  // co.com Registry, LLC : https://registry.co.com
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'co.com',

  // Roar Domains LLC : https://roar.basketball/
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'aus.basketball',
  'nz.basketball',

  // BRS Media : https://brsmedia.com/
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'radio.am',
  'radio.fm',

  // c.la : http://www.c.la/
  'c.la',

  // certmgr.org : https://certmgr.org
  // Submitted by B. Blechschmidt <hostmaster@certmgr.org>
  'certmgr.org',

  // Cityhost LLC  : https://cityhost.ua
  // Submitted by Maksym Rivtin <support@cityhost.net.ua>
  'cx.ua',

  // Civilized Discourse Construction Kit, Inc. : https://www.discourse.org/
  // Submitted by Rishabh Nambiar & Michael Brown <team@discourse.org>
  'discourse.group',
  'discourse.team',

  // Clever Cloud : https://www.clever-cloud.com/
  // Submitted by Quentin Adam <noc@clever-cloud.com>
  'cleverapps.io',

  // Clerk : https://www.clerk.dev
  // Submitted by Colin Sidoti <systems@clerk.dev>
  'clerk.app',
  'clerkstage.app',
  'lcl.dev',
  'lclstage.dev',
  'stg.dev',
  'stgstage.dev',

  // ClickRising : https://clickrising.com/
  // Submitted by Umut Gumeli <infrastructure-publicsuffixlist@clickrising.com>
  'clickrising.net',

  // Cloud66 : https://www.cloud66.com/
  // Submitted by Khash Sajadi <khash@cloud66.com>
  'c66.me',
  'cloud66.ws',
  'cloud66.zone',

  // CloudAccess.net : https://www.cloudaccess.net/
  // Submitted by Pawel Panek <noc@cloudaccess.net>
  'jdevcloud.com',
  'wpdevcloud.com',
  'cloudaccess.host',
  'freesite.host',
  'cloudaccess.net',

  // cloudControl : https://www.cloudcontrol.com/
  // Submitted by Tobias Wilken <tw@cloudcontrol.com>
  'cloudcontrolled.com',
  'cloudcontrolapp.com',

  // Cloudera, Inc. : https://www.cloudera.com/
  // Submitted by Kedarnath Waikar <security@cloudera.com>
  'cloudera.site',

  // Cloudflare, Inc. : https://www.cloudflare.com/
  // Submitted by Cloudflare Team <publicsuffixlist@cloudflare.com>
  'pages.dev',
  'trycloudflare.com',
  'workers.dev',

  // Clovyr : https://clovyr.io
  // Submitted by Patrick Nielsen <patrick@clovyr.io>
  'wnext.app',

  // co.ca : http://registry.co.ca/
  'co.ca',

  // Co & Co : https://co-co.nl/
  // Submitted by Govert Versluis <govert@co-co.nl>
  'otap.co',

  // i-registry s.r.o. : http://www.i-registry.cz/
  // Submitted by Martin Semrad <semrad@i-registry.cz>
  'co.cz',

  // CDN77.com : http://www.cdn77.com
  // Submitted by Jan Krpes <jan.krpes@cdn77.com>
  'c.cdn77.org',
  'cdn77-ssl.net',
  'r.cdn77.net',
  'rsc.cdn77.org',
  'ssl.origin.cdn77-secure.org',

  // Cloud DNS Ltd : http://www.cloudns.net
  // Submitted by Aleksander Hristov <noc@cloudns.net>
  'cloudns.asia',
  'cloudns.biz',
  'cloudns.club',
  'cloudns.cc',
  'cloudns.eu',
  'cloudns.in',
  'cloudns.info',
  'cloudns.org',
  'cloudns.pro',
  'cloudns.pw',
  'cloudns.us',

  // CNPY : https://cnpy.gdn
  // Submitted by Angelo Gladding <angelo@lahacker.net>
  'cnpy.gdn',

  // CoDNS B.V.
  'co.nl',
  'co.no',

  // Combell.com : https://www.combell.com
  // Submitted by Thomas Wouters <thomas.wouters@combellgroup.com>
  'webhosting.be',
  'hosting-cluster.nl',

  // Coordination Center for TLD RU and XN--P1AI : https://cctld.ru/en/domains/domens_ru/reserved/
  // Submitted by George Georgievsky <gug@cctld.ru>
  'ac.ru',
  'edu.ru',
  'gov.ru',
  'int.ru',
  'mil.ru',
  'test.ru',

  // COSIMO GmbH : http://www.cosimo.de
  // Submitted by Rene Marticke <rmarticke@cosimo.de>
  'dyn.cosidns.de',
  'dynamisches-dns.de',
  'dnsupdater.de',
  'internet-dns.de',
  'l-o-g-i-n.de',
  'dynamic-dns.info',
  'feste-ip.net',
  'knx-server.net',
  'static-access.net',

  // Craynic, s.r.o. : http://www.craynic.com/
  // Submitted by Ales Krajnik <ales.krajnik@craynic.com>
  'realm.cz',

  // Cryptonomic : https://cryptonomic.net/
  // Submitted by Andrew Cady <public-suffix-list@cryptonomic.net>
  'cryptonomic.net',

  // Cupcake : https://cupcake.io/
  // Submitted by Jonathan Rudenberg <jonathan@cupcake.io>
  'cupcake.is',

  // Curv UG : https://curv-labs.de/
  // Submitted by Marvin Wiesner <Marvin@curv-labs.de>
  'curv.dev',

  // Customer OCI - Oracle Dyn https://cloud.oracle.com/home https://dyn.com/dns/
  // Submitted by Gregory Drake <support@dyn.com>
  // Note: This is intended to also include customer-oci.com due to wildcards implicitly including the current label
  'customer-oci.com',
  'oci.customer-oci.com',
  'ocp.customer-oci.com',
  'ocs.customer-oci.com',

  // cyon GmbH : https://www.cyon.ch/
  // Submitted by Dominic Luechinger <dol@cyon.ch>
  'cyon.link',
  'cyon.site',

  // Danger Science Group: https://dangerscience.com/
  // Submitted by Skylar MacDonald <skylar@dangerscience.com>
  'fnwk.site',
  'folionetwork.site',
  'platform0.app',

  // Daplie, Inc : https://daplie.com
  // Submitted by AJ ONeal <aj@daplie.com>
  'daplie.me',
  'localhost.daplie.me',

  // Datto, Inc. : https://www.datto.com/
  // Submitted by Philipp Heckel <ph@datto.com>
  'dattolocal.com',
  'dattorelay.com',
  'dattoweb.com',
  'mydatto.com',
  'dattolocal.net',
  'mydatto.net',

  // Dansk.net : http://www.dansk.net/
  // Submitted by Anani Voule <digital@digital.co.dk>
  'biz.dk',
  'co.dk',
  'firm.dk',
  'reg.dk',
  'store.dk',

  // dappnode.io : https://dappnode.io/
  // Submitted by Abel Boldu / DAppNode Team <community@dappnode.io>
  'dyndns.dappnode.io',

  // dapps.earth : https://dapps.earth/
  // Submitted by Daniil Burdakov <icqkill@gmail.com>
  'dapps.earth',
  'bzz.dapps.earth',

  // Dark, Inc. : https://darklang.com
  // Submitted by Paul Biggar <ops@darklang.com>
  'builtwithdark.com',

  // DataDetect, LLC. : https://datadetect.com
  // Submitted by Andrew Banchich <abanchich@sceven.com>
  'demo.datadetect.com',
  'instance.datadetect.com',

  // Datawire, Inc : https://www.datawire.io
  // Submitted by Richard Li <secalert@datawire.io>
  'edgestack.me',

  // DDNS5 : https://ddns5.com
  // Submitted by Cameron Elliott <cameron@cameronelliott.com>
  'ddns5.com',

  // Debian : https://www.debian.org/
  // Submitted by Peter Palfrader / Debian Sysadmin Team <dsa-publicsuffixlist@debian.org>
  'debian.net',

  // Deno Land Inc : https://deno.com/
  // Submitted by Luca Casonato <hostmaster@deno.com>
  'deno.dev',
  'deno-staging.dev',

  // deSEC : https://desec.io/
  // Submitted by Peter Thomassen <peter@desec.io>
  'dedyn.io',

  // Diher Solutions : https://diher.solutions
  // Submitted by Didi Hermawan <mail@diher.solutions>
  'rss.my.id',
  'diher.solutions',

  // DNS Africa Ltd https://dns.business
  // Submitted by Calvin Browne <calvin@dns.business>
  'jozi.biz',

  // DNShome : https://www.dnshome.de/
  // Submitted by Norbert Auler <mail@dnshome.de>
  'dnshome.de',

  // DotArai : https://www.dotarai.com/
  // Submitted by Atsadawat Netcharadsang <atsadawat@dotarai.co.th>
  'online.th',
  'shop.th',

  // DrayTek Corp. : https://www.draytek.com/
  // Submitted by Paul Fang <mis@draytek.com>
  'drayddns.com',

  // DreamCommerce : https://shoper.pl/
  // Submitted by Konrad Kotarba <konrad.kotarba@dreamcommerce.com>
  'shoparena.pl',

  // DreamHost : http://www.dreamhost.com/
  // Submitted by Andrew Farmer <andrew.farmer@dreamhost.com>
  'dreamhosters.com',

  // Drobo : http://www.drobo.com/
  // Submitted by Ricardo Padilha <rpadilha@drobo.com>
  'mydrobo.com',

  // Drud Holdings, LLC. : https://www.drud.com/
  // Submitted by Kevin Bridges <kevin@drud.com>
  'drud.io',
  'drud.us',

  // DuckDNS : http://www.duckdns.org/
  // Submitted by Richard Harper <richard@duckdns.org>
  'duckdns.org',

  // Bip : https://bip.sh
  // Submitted by Joel Kennedy <joel@bip.sh>
  'bip.sh',

  // bitbridge.net : Submitted by Craig Welch, abeliidev@gmail.com
  'bitbridge.net',

  // dy.fi : http://dy.fi/
  // Submitted by Heikki Hannikainen <hessu@hes.iki.fi>
  'dy.fi',
  'tunk.org',

  // DynDNS.com : http://www.dyndns.com/services/dns/dyndns/
  'dyndns-at-home.com',
  'dyndns-at-work.com',
  'dyndns-blog.com',
  'dyndns-free.com',
  'dyndns-home.com',
  'dyndns-ip.com',
  'dyndns-mail.com',
  'dyndns-office.com',
  'dyndns-pics.com',
  'dyndns-remote.com',
  'dyndns-server.com',
  'dyndns-web.com',
  'dyndns-wiki.com',
  'dyndns-work.com',
  'dyndns.biz',
  'dyndns.info',
  'dyndns.org',
  'dyndns.tv',
  'at-band-camp.net',
  'ath.cx',
  'barrel-of-knowledge.info',
  'barrell-of-knowledge.info',
  'better-than.tv',
  'blogdns.com',
  'blogdns.net',
  'blogdns.org',
  'blogsite.org',
  'boldlygoingnowhere.org',
  'broke-it.net',
  'buyshouses.net',
  'cechire.com',
  'dnsalias.com',
  'dnsalias.net',
  'dnsalias.org',
  'dnsdojo.com',
  'dnsdojo.net',
  'dnsdojo.org',
  'does-it.net',
  'doesntexist.com',
  'doesntexist.org',
  'dontexist.com',
  'dontexist.net',
  'dontexist.org',
  'doomdns.com',
  'doomdns.org',
  'dvrdns.org',
  'dyn-o-saur.com',
  'dynalias.com',
  'dynalias.net',
  'dynalias.org',
  'dynathome.net',
  'dyndns.ws',
  'endofinternet.net',
  'endofinternet.org',
  'endoftheinternet.org',
  'est-a-la-maison.com',
  'est-a-la-masion.com',
  'est-le-patron.com',
  'est-mon-blogueur.com',
  'for-better.biz',
  'for-more.biz',
  'for-our.info',
  'for-some.biz',
  'for-the.biz',
  'forgot.her.name',
  'forgot.his.name',
  'from-ak.com',
  'from-al.com',
  'from-ar.com',
  'from-az.net',
  'from-ca.com',
  'from-co.net',
  'from-ct.com',
  'from-dc.com',
  'from-de.com',
  'from-fl.com',
  'from-ga.com',
  'from-hi.com',
  'from-ia.com',
  'from-id.com',
  'from-il.com',
  'from-in.com',
  'from-ks.com',
  'from-ky.com',
  'from-la.net',
  'from-ma.com',
  'from-md.com',
  'from-me.org',
  'from-mi.com',
  'from-mn.com',
  'from-mo.com',
  'from-ms.com',
  'from-mt.com',
  'from-nc.com',
  'from-nd.com',
  'from-ne.com',
  'from-nh.com',
  'from-nj.com',
  'from-nm.com',
  'from-nv.com',
  'from-ny.net',
  'from-oh.com',
  'from-ok.com',
  'from-or.com',
  'from-pa.com',
  'from-pr.com',
  'from-ri.com',
  'from-sc.com',
  'from-sd.com',
  'from-tn.com',
  'from-tx.com',
  'from-ut.com',
  'from-va.com',
  'from-vt.com',
  'from-wa.com',
  'from-wi.com',
  'from-wv.com',
  'from-wy.com',
  'ftpaccess.cc',
  'fuettertdasnetz.de',
  'game-host.org',
  'game-server.cc',
  'getmyip.com',
  'gets-it.net',
  'go.dyndns.org',
  'gotdns.com',
  'gotdns.org',
  'groks-the.info',
  'groks-this.info',
  'ham-radio-op.net',
  'here-for-more.info',
  'hobby-site.com',
  'hobby-site.org',
  'home.dyndns.org',
  'homedns.org',
  'homeftp.net',
  'homeftp.org',
  'homeip.net',
  'homelinux.com',
  'homelinux.net',
  'homelinux.org',
  'homeunix.com',
  'homeunix.net',
  'homeunix.org',
  'iamallama.com',
  'in-the-band.net',
  'is-a-anarchist.com',
  'is-a-blogger.com',
  'is-a-bookkeeper.com',
  'is-a-bruinsfan.org',
  'is-a-bulls-fan.com',
  'is-a-candidate.org',
  'is-a-caterer.com',
  'is-a-celticsfan.org',
  'is-a-chef.com',
  'is-a-chef.net',
  'is-a-chef.org',
  'is-a-conservative.com',
  'is-a-cpa.com',
  'is-a-cubicle-slave.com',
  'is-a-democrat.com',
  'is-a-designer.com',
  'is-a-doctor.com',
  'is-a-financialadvisor.com',
  'is-a-geek.com',
  'is-a-geek.net',
  'is-a-geek.org',
  'is-a-green.com',
  'is-a-guru.com',
  'is-a-hard-worker.com',
  'is-a-hunter.com',
  'is-a-knight.org',
  'is-a-landscaper.com',
  'is-a-lawyer.com',
  'is-a-liberal.com',
  'is-a-libertarian.com',
  'is-a-linux-user.org',
  'is-a-llama.com',
  'is-a-musician.com',
  'is-a-nascarfan.com',
  'is-a-nurse.com',
  'is-a-painter.com',
  'is-a-patsfan.org',
  'is-a-personaltrainer.com',
  'is-a-photographer.com',
  'is-a-player.com',
  'is-a-republican.com',
  'is-a-rockstar.com',
  'is-a-socialist.com',
  'is-a-soxfan.org',
  'is-a-student.com',
  'is-a-teacher.com',
  'is-a-techie.com',
  'is-a-therapist.com',
  'is-an-accountant.com',
  'is-an-actor.com',
  'is-an-actress.com',
  'is-an-anarchist.com',
  'is-an-artist.com',
  'is-an-engineer.com',
  'is-an-entertainer.com',
  'is-by.us',
  'is-certified.com',
  'is-found.org',
  'is-gone.com',
  'is-into-anime.com',
  'is-into-cars.com',
  'is-into-cartoons.com',
  'is-into-games.com',
  'is-leet.com',
  'is-lost.org',
  'is-not-certified.com',
  'is-saved.org',
  'is-slick.com',
  'is-uberleet.com',
  'is-very-bad.org',
  'is-very-evil.org',
  'is-very-good.org',
  'is-very-nice.org',
  'is-very-sweet.org',
  'is-with-theband.com',
  'isa-geek.com',
  'isa-geek.net',
  'isa-geek.org',
  'isa-hockeynut.com',
  'issmarterthanyou.com',
  'isteingeek.de',
  'istmein.de',
  'kicks-ass.net',
  'kicks-ass.org',
  'knowsitall.info',
  'land-4-sale.us',
  'lebtimnetz.de',
  'leitungsen.de',
  'likes-pie.com',
  'likescandy.com',
  'merseine.nu',
  'mine.nu',
  'misconfused.org',
  'mypets.ws',
  'myphotos.cc',
  'neat-url.com',
  'office-on-the.net',
  'on-the-web.tv',
  'podzone.net',
  'podzone.org',
  'readmyblog.org',
  'saves-the-whales.com',
  'scrapper-site.net',
  'scrapping.cc',
  'selfip.biz',
  'selfip.com',
  'selfip.info',
  'selfip.net',
  'selfip.org',
  'sells-for-less.com',
  'sells-for-u.com',
  'sells-it.net',
  'sellsyourhome.org',
  'servebbs.com',
  'servebbs.net',
  'servebbs.org',
  'serveftp.net',
  'serveftp.org',
  'servegame.org',
  'shacknet.nu',
  'simple-url.com',
  'space-to-rent.com',
  'stuff-4-sale.org',
  'stuff-4-sale.us',
  'teaches-yoga.com',
  'thruhere.net',
  'traeumtgerade.de',
  'webhop.biz',
  'webhop.info',
  'webhop.net',
  'webhop.org',
  'worse-than.tv',
  'writesthisblog.com',

  // ddnss.de : https://www.ddnss.de/
  // Submitted by Robert Niedziela <webmaster@ddnss.de>
  'ddnss.de',
  'dyn.ddnss.de',
  'dyndns.ddnss.de',
  'dyndns1.de',
  'dyn-ip24.de',
  'home-webserver.de',
  'dyn.home-webserver.de',
  'myhome-server.de',
  'ddnss.org',

  // Definima : http://www.definima.com/
  // Submitted by Maxence Bitterli <maxence@definima.com>
  'definima.net',
  'definima.io',

  // DigitalOcean App Platform : https://www.digitalocean.com/products/app-platform/
  // Submitted by Braxton Huggins <psl-maintainers@digitalocean.com>
  'ondigitalocean.app',

  // DigitalOcean Spaces : https://www.digitalocean.com/products/spaces/
  // Submitted by Robin H. Johnson <psl-maintainers@digitalocean.com>
  'digitaloceanspaces.com',

  // dnstrace.pro : https://dnstrace.pro/
  // Submitted by Chris Partridge <chris@partridge.tech>
  'bci.dnstrace.pro',

  // Dynu.com : https://www.dynu.com/
  // Submitted by Sue Ye <sue@dynu.com>
  'ddnsfree.com',
  'ddnsgeek.com',
  'giize.com',
  'gleeze.com',
  'kozow.com',
  'loseyourip.com',
  'ooguy.com',
  'theworkpc.com',
  'casacam.net',
  'dynu.net',
  'accesscam.org',
  'camdvr.org',
  'freeddns.org',
  'mywire.org',
  'webredirect.org',
  'myddns.rocks',
  'blogsite.xyz',

  // dynv6 : https://dynv6.com
  // Submitted by Dominik Menke <dom@digineo.de>
  'dynv6.net',

  // E4YOU spol. s.r.o. : https://e4you.cz/
  // Submitted by Vladimir Dudr <info@e4you.cz>
  'e4.cz',

  // eero : https://eero.com/
  // Submitted by Yue Kang <eero-dynamic-dns@amazon.com>
  'eero.online',
  'eero-stage.online',

  // Elementor : Elementor Ltd.
  // Submitted by Anton Barkan <antonb@elementor.com>
  'elementor.cloud',
  'elementor.cool',

  // En root‽ : https://en-root.org
  // Submitted by Emmanuel Raviart <emmanuel@raviart.com>
  'en-root.fr',

  // Enalean SAS: https://www.enalean.com
  // Submitted by Thomas Cottier <thomas.cottier@enalean.com>
  'mytuleap.com',
  'tuleap-partners.com',

  // ECG Robotics, Inc: https://ecgrobotics.org
  // Submitted by <frc1533@ecgrobotics.org>
  'onred.one',
  'staging.onred.one',

  // encoway GmbH : https://www.encoway.de
  // Submitted by Marcel Daus <cloudops@encoway.de>
  'eu.encoway.cloud',

  // EU.org https://eu.org/
  // Submitted by Pierre Beyssac <hostmaster@eu.org>
  'eu.org',
  'al.eu.org',
  'asso.eu.org',
  'at.eu.org',
  'au.eu.org',
  'be.eu.org',
  'bg.eu.org',
  'ca.eu.org',
  'cd.eu.org',
  'ch.eu.org',
  'cn.eu.org',
  'cy.eu.org',
  'cz.eu.org',
  'de.eu.org',
  'dk.eu.org',
  'edu.eu.org',
  'ee.eu.org',
  'es.eu.org',
  'fi.eu.org',
  'fr.eu.org',
  'gr.eu.org',
  'hr.eu.org',
  'hu.eu.org',
  'ie.eu.org',
  'il.eu.org',
  'in.eu.org',
  'int.eu.org',
  'is.eu.org',
  'it.eu.org',
  'jp.eu.org',
  'kr.eu.org',
  'lt.eu.org',
  'lu.eu.org',
  'lv.eu.org',
  'mc.eu.org',
  'me.eu.org',
  'mk.eu.org',
  'mt.eu.org',
  'my.eu.org',
  'net.eu.org',
  'ng.eu.org',
  'nl.eu.org',
  'no.eu.org',
  'nz.eu.org',
  'paris.eu.org',
  'pl.eu.org',
  'pt.eu.org',
  'q-a.eu.org',
  'ro.eu.org',
  'ru.eu.org',
  'se.eu.org',
  'si.eu.org',
  'sk.eu.org',
  'tr.eu.org',
  'uk.eu.org',
  'us.eu.org',

  // Eurobyte : https://eurobyte.ru
  // Submitted by Evgeniy Subbotin <e.subbotin@eurobyte.ru>
  'eurodir.ru',

  // Evennode : http://www.evennode.com/
  // Submitted by Michal Kralik <support@evennode.com>
  'eu-1.evennode.com',
  'eu-2.evennode.com',
  'eu-3.evennode.com',
  'eu-4.evennode.com',
  'us-1.evennode.com',
  'us-2.evennode.com',
  'us-3.evennode.com',
  'us-4.evennode.com',

  // eDirect Corp. : https://hosting.url.com.tw/
  // Submitted by C.S. chang <cschang@corp.url.com.tw>
  'twmail.cc',
  'twmail.net',
  'twmail.org',
  'mymailer.com.tw',
  'url.tw',

  // Fabrica Technologies, Inc. : https://www.fabrica.dev/
  // Submitted by Eric Jiang <eric@fabrica.dev>
  'onfabrica.com',

  // Facebook, Inc.
  // Submitted by Peter Ruibal <public-suffix@fb.com>
  'apps.fbsbx.com',

  // FAITID : https://faitid.org/
  // Submitted by Maxim Alzoba <tech.contact@faitid.org>
  // https://www.flexireg.net/stat_info
  'ru.net',
  'adygeya.ru',
  'bashkiria.ru',
  'bir.ru',
  'cbg.ru',
  'com.ru',
  'dagestan.ru',
  'grozny.ru',
  'kalmykia.ru',
  'kustanai.ru',
  'marine.ru',
  'mordovia.ru',
  'msk.ru',
  'mytis.ru',
  'nalchik.ru',
  'nov.ru',
  'pyatigorsk.ru',
  'spb.ru',
  'vladikavkaz.ru',
  'vladimir.ru',
  'abkhazia.su',
  'adygeya.su',
  'aktyubinsk.su',
  'arkhangelsk.su',
  'armenia.su',
  'ashgabad.su',
  'azerbaijan.su',
  'balashov.su',
  'bashkiria.su',
  'bryansk.su',
  'bukhara.su',
  'chimkent.su',
  'dagestan.su',
  'east-kazakhstan.su',
  'exnet.su',
  'georgia.su',
  'grozny.su',
  'ivanovo.su',
  'jambyl.su',
  'kalmykia.su',
  'kaluga.su',
  'karacol.su',
  'karaganda.su',
  'karelia.su',
  'khakassia.su',
  'krasnodar.su',
  'kurgan.su',
  'kustanai.su',
  'lenug.su',
  'mangyshlak.su',
  'mordovia.su',
  'msk.su',
  'murmansk.su',
  'nalchik.su',
  'navoi.su',
  'north-kazakhstan.su',
  'nov.su',
  'obninsk.su',
  'penza.su',
  'pokrovsk.su',
  'sochi.su',
  'spb.su',
  'tashkent.su',
  'termez.su',
  'togliatti.su',
  'troitsk.su',
  'tselinograd.su',
  'tula.su',
  'tuva.su',
  'vladikavkaz.su',
  'vladimir.su',
  'vologda.su',

  // Fancy Bits, LLC : http://getchannels.com
  // Submitted by Aman Gupta <aman@getchannels.com>
  'channelsdvr.net',
  'u.channelsdvr.net',

  // Fastly Inc. : http://www.fastly.com/
  // Submitted by Fastly Security <security@fastly.com>
  'edgecompute.app',
  'fastly-terrarium.com',
  'fastlylb.net',
  'map.fastlylb.net',
  'freetls.fastly.net',
  'map.fastly.net',
  'a.prod.fastly.net',
  'global.prod.fastly.net',
  'a.ssl.fastly.net',
  'b.ssl.fastly.net',
  'global.ssl.fastly.net',

  // FASTVPS EESTI OU : https://fastvps.ru/
  // Submitted by Likhachev Vasiliy <lihachev@fastvps.ru>
  'fastvps-server.com',
  'fastvps.host',
  'myfast.host',
  'fastvps.site',
  'myfast.space',

  // Fedora : https://fedoraproject.org/
  // submitted by Patrick Uiterwijk <puiterwijk@fedoraproject.org>
  'fedorainfracloud.org',
  'fedorapeople.org',
  'cloud.fedoraproject.org',
  'app.os.fedoraproject.org',
  'app.os.stg.fedoraproject.org',

  // FearWorks Media Ltd. : https://fearworksmedia.co.uk
  // submitted by Keith Fairley <domains@fearworksmedia.co.uk>
  'couk.me',
  'ukco.me',
  'conn.uk',
  'copro.uk',
  'hosp.uk',

  // Fermax : https://fermax.com/
  // submitted by Koen Van Isterdael <k.vanisterdael@fermax.be>
  'mydobiss.com',

  // FH Muenster : https://www.fh-muenster.de
  // Submitted by Robin Naundorf <r.naundorf@fh-muenster.de>
  'fh-muenster.io',

  // Filegear Inc. : https://www.filegear.com
  // Submitted by Jason Zhu <jason@owtware.com>
  'filegear.me',
  'filegear-au.me',
  'filegear-de.me',
  'filegear-gb.me',
  'filegear-ie.me',
  'filegear-jp.me',
  'filegear-sg.me',

  // Firebase, Inc.
  // Submitted by Chris Raynor <chris@firebase.com>
  'firebaseapp.com',

  // Firewebkit : https://www.firewebkit.com
  // Submitted by Majid Qureshi <mqureshi@amrayn.com>
  'fireweb.app',

  // FLAP : https://www.flap.cloud
  // Submitted by Louis Chemineau <louis@chmn.me>
  'flap.id',

  // FlashDrive : https://flashdrive.io
  // Submitted by Eric Chan <support@flashdrive.io>
  'onflashdrive.app',
  'fldrv.com',

  // fly.io: https://fly.io
  // Submitted by Kurt Mackey <kurt@fly.io>
  'fly.dev',
  'edgeapp.net',
  'shw.io',

  // Flynn : https://flynn.io
  // Submitted by Jonathan Rudenberg <jonathan@flynn.io>
  'flynnhosting.net',

  // Forgerock : https://www.forgerock.com
  // Submitted by Roderick Parr <roderick.parr@forgerock.com>
  'forgeblocks.com',
  'id.forgerock.io',

  // Framer : https://www.framer.com
  // Submitted by Koen Rouwhorst <koenrh@framer.com>
  'framer.app',
  'framercanvas.com',

  // Frusky MEDIA&PR : https://www.frusky.de
  // Submitted by Victor Pupynin <hallo@frusky.de>
  'frusky.de',

  // RavPage : https://www.ravpage.co.il
  // Submitted by Roni Horowitz <roni@responder.co.il>
  'ravpage.co.il',

  // Frederik Braun https://frederik-braun.com
  // Submitted by Frederik Braun <fb@frederik-braun.com>
  '0e.vc',

  // Freebox : http://www.freebox.fr
  // Submitted by Romain Fliedel <rfliedel@freebox.fr>
  'freebox-os.com',
  'freeboxos.com',
  'fbx-os.fr',
  'fbxos.fr',
  'freebox-os.fr',
  'freeboxos.fr',

  // freedesktop.org : https://www.freedesktop.org
  // Submitted by Daniel Stone <daniel@fooishbar.org>
  'freedesktop.org',

  // freemyip.com : https://freemyip.com
  // Submitted by Cadence <contact@freemyip.com>
  'freemyip.com',

  // FunkFeuer - Verein zur Förderung freier Netze : https://www.funkfeuer.at
  // Submitted by Daniel A. Maierhofer <vorstand@funkfeuer.at>
  'wien.funkfeuer.at',

  // Futureweb OG : http://www.futureweb.at
  // Submitted by Andreas Schnederle-Wagner <schnederle@futureweb.at>
  'futurecms.at',
  'ex.futurecms.at',
  'in.futurecms.at',
  'futurehosting.at',
  'futuremailing.at',
  'ex.ortsinfo.at',
  'kunden.ortsinfo.at',
  'statics.cloud',

  // GDS : https://www.gov.uk/service-manual/operations/operating-servicegovuk-subdomains
  // Submitted by David Illsley <david.illsley@digital.cabinet-office.gov.uk>
  'service.gov.uk',

  // Gehirn Inc. : https://www.gehirn.co.jp/
  // Submitted by Kohei YOSHIDA <tech@gehirn.co.jp>
  'gehirn.ne.jp',
  'usercontent.jp',

  // Gentlent, Inc. : https://www.gentlent.com
  // Submitted by Tom Klein <tom@gentlent.com>
  'gentapps.com',
  'gentlentapis.com',
  'lab.ms',
  'cdn-edges.net',

  // Ghost Foundation : https://ghost.org
  // Submitted by Matt Hanley <security@ghost.org>
  'ghost.io',

  // GignoSystemJapan: http://gsj.bz
  // Submitted by GignoSystemJapan <kakutou-ec@gsj.bz>
  'gsj.bz',

  // GitHub, Inc.
  // Submitted by Patrick Toomey <security@github.com>
  'githubusercontent.com',
  'githubpreview.dev',
  'github.io',

  // GitLab, Inc.
  // Submitted by Alex Hanselka <alex@gitlab.com>
  'gitlab.io',

  // Gitplac.si - https://gitplac.si
  // Submitted by Aljaž Starc <me@aljaxus.eu>
  'gitapp.si',
  'gitpage.si',

  // Glitch, Inc : https://glitch.com
  // Submitted by Mads Hartmann <mads@glitch.com>
  'glitch.me',

  // Global NOG Alliance : https://nogalliance.org/
  // Submitted by Sander Steffann <sander@nogalliance.org>
  'nog.community',

  // Globe Hosting SRL : https://www.globehosting.com/
  // Submitted by Gavin Brown <gavin.brown@centralnic.com>
  'co.ro',
  'shop.ro',

  // GMO Pepabo, Inc. : https://pepabo.com/
  // Submitted by dojineko <admin@pepabo.com>
  'lolipop.io',

  // GOV.UK Platform as a Service : https://www.cloud.service.gov.uk/
  // Submitted by Tom Whitwell <gov-uk-paas-support@digital.cabinet-office.gov.uk>
  'cloudapps.digital',
  'london.cloudapps.digital',

  // GOV.UK Pay : https://www.payments.service.gov.uk/
  // Submitted by Richard Baker <richard.baker@digital.cabinet-office.gov.uk>
  'pymnt.uk',

  // UKHomeOffice : https://www.gov.uk/government/organisations/home-office
  // Submitted by Jon Shanks <jon.shanks@digital.homeoffice.gov.uk>
  'homeoffice.gov.uk',

  // GlobeHosting, Inc.
  // Submitted by Zoltan Egresi <egresi@globehosting.com>
  'ro.im',

  // GoIP DNS Services : http://www.goip.de
  // Submitted by Christian Poulter <milchstrasse@goip.de>
  'goip.de',

  // Google, Inc.
  // Submitted by Eduardo Vela <evn@google.com>
  'run.app',
  'a.run.app',
  'web.app',
  '0emm.com',
  'appspot.com',
  'r.appspot.com',
  'codespot.com',
  'googleapis.com',
  'googlecode.com',
  'pagespeedmobilizer.com',
  'publishproxy.com',
  'withgoogle.com',
  'withyoutube.com',
  'gateway.dev',
  'cloud.goog',
  'translate.goog',
  'usercontent.goog',
  'cloudfunctions.net',
  'blogspot.ae',
  'blogspot.al',
  'blogspot.am',
  'blogspot.ba',
  'blogspot.be',
  'blogspot.bg',
  'blogspot.bj',
  'blogspot.ca',
  'blogspot.cf',
  'blogspot.ch',
  'blogspot.cl',
  'blogspot.co.at',
  'blogspot.co.id',
  'blogspot.co.il',
  'blogspot.co.ke',
  'blogspot.co.nz',
  'blogspot.co.uk',
  'blogspot.co.za',
  'blogspot.com',
  'blogspot.com.ar',
  'blogspot.com.au',
  'blogspot.com.br',
  'blogspot.com.by',
  'blogspot.com.co',
  'blogspot.com.cy',
  'blogspot.com.ee',
  'blogspot.com.eg',
  'blogspot.com.es',
  'blogspot.com.mt',
  'blogspot.com.ng',
  'blogspot.com.tr',
  'blogspot.com.uy',
  'blogspot.cv',
  'blogspot.cz',
  'blogspot.de',
  'blogspot.dk',
  'blogspot.fi',
  'blogspot.fr',
  'blogspot.gr',
  'blogspot.hk',
  'blogspot.hr',
  'blogspot.hu',
  'blogspot.ie',
  'blogspot.in',
  'blogspot.is',
  'blogspot.it',
  'blogspot.jp',
  'blogspot.kr',
  'blogspot.li',
  'blogspot.lt',
  'blogspot.lu',
  'blogspot.md',
  'blogspot.mk',
  'blogspot.mr',
  'blogspot.mx',
  'blogspot.my',
  'blogspot.nl',
  'blogspot.no',
  'blogspot.pe',
  'blogspot.pt',
  'blogspot.qa',
  'blogspot.re',
  'blogspot.ro',
  'blogspot.rs',
  'blogspot.ru',
  'blogspot.se',
  'blogspot.sg',
  'blogspot.si',
  'blogspot.sk',
  'blogspot.sn',
  'blogspot.td',
  'blogspot.tw',
  'blogspot.ug',
  'blogspot.vn',

  // Goupile : https://goupile.fr
  // Submitted by Niels Martignene <hello@goupile.fr>
  'goupile.fr',

  // Group 53, LLC : https://www.group53.com
  // Submitted by Tyler Todd <noc@nova53.net>
  'awsmppl.com',

  // GünstigBestellen : https://günstigbestellen.de
  // Submitted by Furkan Akkoc <info@hendelzon.de>
  'günstigbestellen.de',
  'günstigliefern.de',

  // Hakaran group: http://hakaran.cz
  // Submited by Arseniy Sokolov <security@hakaran.cz>
  'fin.ci',
  'free.hr',
  'caa.li',
  'ua.rs',
  'conf.se',

  // Handshake : https://handshake.org
  // Submitted by Mike Damm <md@md.vc>
  'hs.zone',
  'hs.run',

  // Hashbang : https://hashbang.sh
  'hashbang.sh',

  // Hasura : https://hasura.io
  // Submitted by Shahidh K Muhammed <shahidh@hasura.io>
  'hasura.app',
  'hasura-app.io',

  // Heilbronn University of Applied Sciences - Faculty Informatics (GitLab Pages): https://www.hs-heilbronn.de
  // Submitted by Richard Zowalla <mi-admin@hs-heilbronn.de>
  'pages.it.hs-heilbronn.de',

  // Hepforge : https://www.hepforge.org
  // Submitted by David Grellscheid <admin@hepforge.org>
  'hepforge.org',

  // Heroku : https://www.heroku.com/
  // Submitted by Tom Maher <tmaher@heroku.com>
  'herokuapp.com',
  'herokussl.com',

  // Hibernating Rhinos
  // Submitted by Oren Eini <oren@ravendb.net>
  'ravendb.cloud',
  'myravendb.com',
  'ravendb.community',
  'ravendb.me',
  'development.run',
  'ravendb.run',

  // home.pl S.A.: https://home.pl
  // Submited by Krzysztof Wolski <krzysztof.wolski@home.eu>
  'homesklep.pl',

  // Hong Kong Productivity Council: https://www.hkpc.org/
  // Submitted by SECaaS Team <summchan@hkpc.org>
  'secaas.hk',

  // Hoplix : https://www.hoplix.com
  // Submitted by Danilo De Franco<info@hoplix.shop>
  'hoplix.shop',

  // HOSTBIP REGISTRY : https://www.hostbip.com/
  // Submitted by Atanunu Igbunuroghene <publicsuffixlist@hostbip.com>
  'orx.biz',
  'biz.gl',
  'col.ng',
  'firm.ng',
  'gen.ng',
  'ltd.ng',
  'ngo.ng',
  'edu.scot',
  'sch.so',
  'org.yt',

  // HostyHosting (hostyhosting.com)
  'hostyhosting.io',

  // Häkkinen.fi
  // Submitted by Eero Häkkinen <Eero+psl@Häkkinen.fi>
  'häkkinen.fi',

  // Ici la Lune : http://www.icilalune.com/
  // Submitted by Simon Morvan <simon@icilalune.com>
  'moonscale.io',
  'moonscale.net',

  // iki.fi
  // Submitted by Hannu Aronsson <haa@iki.fi>
  'iki.fi',

  // Impertrix Solutions : <https://impertrixcdn.com>
  // Submitted by Zhixiang Zhao <csuite@impertrix.com>
  'impertrixcdn.com',
  'impertrix.com',

  // Incsub, LLC: https://incsub.com/
  // Submitted by Aaron Edwards <sysadmins@incsub.com>
  'smushcdn.com',
  'wphostedmail.com',
  'wpmucdn.com',
  'tempurl.host',
  'wpmudev.host',

  // Individual Network Berlin e.V. : https://www.in-berlin.de/
  // Submitted by Christian Seitz <chris@in-berlin.de>
  'dyn-berlin.de',
  'in-berlin.de',
  'in-brb.de',
  'in-butter.de',
  'in-dsl.de',
  'in-dsl.net',
  'in-dsl.org',
  'in-vpn.de',
  'in-vpn.net',
  'in-vpn.org',

  // info.at : http://www.info.at/
  'biz.at',
  'info.at',

  // info.cx : http://info.cx
  // Submitted by Jacob Slater <whois@igloo.to>
  'info.cx',

  // Interlegis : http://www.interlegis.leg.br
  // Submitted by Gabriel Ferreira <registrobr@interlegis.leg.br>
  'ac.leg.br',
  'al.leg.br',
  'am.leg.br',
  'ap.leg.br',
  'ba.leg.br',
  'ce.leg.br',
  'df.leg.br',
  'es.leg.br',
  'go.leg.br',
  'ma.leg.br',
  'mg.leg.br',
  'ms.leg.br',
  'mt.leg.br',
  'pa.leg.br',
  'pb.leg.br',
  'pe.leg.br',
  'pi.leg.br',
  'pr.leg.br',
  'rj.leg.br',
  'rn.leg.br',
  'ro.leg.br',
  'rr.leg.br',
  'rs.leg.br',
  'sc.leg.br',
  'se.leg.br',
  'sp.leg.br',
  'to.leg.br',

  // intermetrics GmbH : https://pixolino.com/
  // Submitted by Wolfgang Schwarz <admin@intermetrics.de>
  'pixolino.com',

  // Internet-Pro, LLP: https://netangels.ru/
  // Submited by Vasiliy Sheredeko <piphon@gmail.com>
  'na4u.ru',

  // iopsys software solutions AB : https://iopsys.eu/
  // Submitted by Roman Azarenko <roman.azarenko@iopsys.eu>
  'iopsys.se',

  // IPiFony Systems, Inc. : https://www.ipifony.com/
  // Submitted by Matthew Hardeman <mhardeman@ipifony.com>
  'ipifony.net',

  // IServ GmbH : https://iserv.eu
  // Submitted by Kim-Alexander Brodowski <info@iserv.eu>
  'mein-iserv.de',
  'schulserver.de',
  'test-iserv.de',
  'iserv.dev',

  // I-O DATA DEVICE, INC. : http://www.iodata.com/
  // Submitted by Yuji Minagawa <domains-admin@iodata.jp>
  'iobb.net',

  // Jelastic, Inc. : https://jelastic.com/
  // Submited by Ihor Kolodyuk <ik@jelastic.com>
  'mel.cloudlets.com.au',
  'cloud.interhostsolutions.be',
  'users.scale.virtualcloud.com.br',
  'mycloud.by',
  'alp1.ae.flow.ch',
  'appengine.flow.ch',
  'es-1.axarnet.cloud',
  'diadem.cloud',
  'vip.jelastic.cloud',
  'jele.cloud',
  'it1.eur.aruba.jenv-aruba.cloud',
  'it1.jenv-aruba.cloud',
  'keliweb.cloud',
  'cs.keliweb.cloud',
  'oxa.cloud',
  'tn.oxa.cloud',
  'uk.oxa.cloud',
  'primetel.cloud',
  'uk.primetel.cloud',
  'ca.reclaim.cloud',
  'uk.reclaim.cloud',
  'us.reclaim.cloud',
  'ch.trendhosting.cloud',
  'de.trendhosting.cloud',
  'jele.club',
  'amscompute.com',
  'clicketcloud.com',
  'dopaas.com',
  'hidora.com',
  'paas.hosted-by-previder.com',
  'rag-cloud.hosteur.com',
  'rag-cloud-ch.hosteur.com',
  'jcloud.ik-server.com',
  'jcloud-ver-jpc.ik-server.com',
  'demo.jelastic.com',
  'kilatiron.com',
  'paas.massivegrid.com',
  'jed.wafaicloud.com',
  'lon.wafaicloud.com',
  'ryd.wafaicloud.com',
  'j.scaleforce.com.cy',
  'jelastic.dogado.eu',
  'fi.cloudplatform.fi',
  'demo.datacenter.fi',
  'paas.datacenter.fi',
  'jele.host',
  'mircloud.host',
  'paas.beebyte.io',
  'sekd1.beebyteapp.io',
  'jele.io',
  'cloud-fr1.unispace.io',
  'jc.neen.it',
  'cloud.jelastic.open.tim.it',
  'jcloud.kz',
  'upaas.kazteleport.kz',
  'cloudjiffy.net',
  'fra1-de.cloudjiffy.net',
  'west1-us.cloudjiffy.net',
  'jls-sto1.elastx.net',
  'jls-sto2.elastx.net',
  'jls-sto3.elastx.net',
  'faststacks.net',
  'fr-1.paas.massivegrid.net',
  'lon-1.paas.massivegrid.net',
  'lon-2.paas.massivegrid.net',
  'ny-1.paas.massivegrid.net',
  'ny-2.paas.massivegrid.net',
  'sg-1.paas.massivegrid.net',
  'jelastic.saveincloud.net',
  'nordeste-idc.saveincloud.net',
  'j.scaleforce.net',
  'jelastic.tsukaeru.net',
  'sdscloud.pl',
  'unicloud.pl',
  'mircloud.ru',
  'jelastic.regruhosting.ru',
  'enscaled.sg',
  'jele.site',
  'jelastic.team',
  'orangecloud.tn',
  'j.layershift.co.uk',
  'phx.enscaled.us',
  'mircloud.us',

  // Jino : https://www.jino.ru
  // Submitted by Sergey Ulyashin <ulyashin@jino.ru>
  'myjino.ru',
  'hosting.myjino.ru',
  'landing.myjino.ru',
  'spectrum.myjino.ru',
  'vps.myjino.ru',

  // Jotelulu S.L. : https://jotelulu.com
  // Submitted by Daniel Fariña <ingenieria@jotelulu.com>
  'jotelulu.cloud',

  // Joyent : https://www.joyent.com/
  // Submitted by Brian Bennett <brian.bennett@joyent.com>
  'triton.zone',
  'cns.joyent.com',

  // JS.ORG : http://dns.js.org
  // Submitted by Stefan Keim <admin@js.org>
  'js.org',

  // KaasHosting : http://www.kaashosting.nl/
  // Submitted by Wouter Bakker <hostmaster@kaashosting.nl>
  'kaas.gg',
  'khplay.nl',

  // Keyweb AG : https://www.keyweb.de
  // Submitted by Martin Dannehl <postmaster@keymachine.de>
  'keymachine.de',

  // KingHost : https://king.host
  // Submitted by Felipe Keller Braz <felipebraz@kinghost.com.br>
  'kinghost.net',
  'uni5.net',

  // KnightPoint Systems, LLC : http://www.knightpoint.com/
  // Submitted by Roy Keene <rkeene@knightpoint.com>
  'knightpoint.systems',

  // KoobinEvent, SL: https://www.koobin.com
  // Submitted by Iván Oliva <ivan.oliva@koobin.com>
  'koobin.events',

  // KUROKU LTD : https://kuroku.ltd/
  // Submitted by DisposaBoy <security@oya.to>
  'oya.to',

  // Katholieke Universiteit Leuven: https://www.kuleuven.be
  // Submitted by Abuse KU Leuven <abuse@kuleuven.be>
  'kuleuven.cloud',
  'ezproxy.kuleuven.be',

  // .KRD : http://nic.krd/data/krd/Registration%20Policy.pdf
  'co.krd',
  'edu.krd',

  // Krellian Ltd. : https://krellian.com
  // Submitted by Ben Francis <ben@krellian.com>
  'krellian.net',
  'webthings.io',

  // LCube - Professional hosting e.K. : https://www.lcube-webhosting.de
  // Submitted by Lars Laehn <info@lcube.de>
  'git-repos.de',
  'lcube-server.de',
  'svn-repos.de',

  // Leadpages : https://www.leadpages.net
  // Submitted by Greg Dallavalle <domains@leadpages.net>
  'leadpages.co',
  'lpages.co',
  'lpusercontent.com',

  // Lelux.fi : https://lelux.fi/
  // Submitted by Lelux Admin <publisuffix@lelux.site>
  'lelux.site',

  // Lifetime Hosting : https://Lifetime.Hosting/
  // Submitted by Mike Fillator <support@lifetime.hosting>
  'co.business',
  'co.education',
  'co.events',
  'co.financial',
  'co.network',
  'co.place',
  'co.technology',

  // Lightmaker Property Manager, Inc. : https://app.lmpm.com/
  // Submitted by Greg Holland <greg.holland@lmpm.com>
  'app.lmpm.com',

  // linkyard ldt: https://www.linkyard.ch/
  // Submitted by Mario Siegenthaler <mario.siegenthaler@linkyard.ch>
  'linkyard.cloud',
  'linkyard-cloud.ch',

  // Linode : https://linode.com
  // Submitted by <security@linode.com>
  'members.linode.com',
  'nodebalancer.linode.com',
  'linodeobjects.com',
  'ip.linodeusercontent.com',

  // LiquidNet Ltd : http://www.liquidnetlimited.com/
  // Submitted by Victor Velchev <admin@liquidnetlimited.com>
  'we.bs',

  // localzone.xyz
  // Submitted by Kenny Niehage <hello@yahe.sh>
  'localzone.xyz',

  // Log'in Line : https://www.loginline.com/
  // Submitted by Rémi Mach <remi.mach@loginline.com>
  'loginline.app',
  'loginline.dev',
  'loginline.io',
  'loginline.services',
  'loginline.site',

  // Lokalized : https://lokalized.nl
  // Submitted by Noah Taheij <noah@lokalized.nl>
  'servers.run',

  // Lõhmus Family, The
  // Submitted by Heiki Lõhmus <hostmaster at lohmus dot me>
  'lohmus.me',

  // LubMAN UMCS Sp. z o.o : https://lubman.pl/
  // Submitted by Ireneusz Maliszewski <ireneusz.maliszewski@lubman.pl>
  'krasnik.pl',
  'leczna.pl',
  'lubartow.pl',
  'lublin.pl',
  'poniatowa.pl',
  'swidnik.pl',

  // Lug.org.uk : https://lug.org.uk
  // Submitted by Jon Spriggs <admin@lug.org.uk>
  'glug.org.uk',
  'lug.org.uk',
  'lugs.org.uk',

  // Lukanet Ltd : https://lukanet.com
  // Submitted by Anton Avramov <register@lukanet.com>
  'barsy.bg',
  'barsy.co.uk',
  'barsyonline.co.uk',
  'barsycenter.com',
  'barsyonline.com',
  'barsy.club',
  'barsy.de',
  'barsy.eu',
  'barsy.in',
  'barsy.info',
  'barsy.io',
  'barsy.me',
  'barsy.menu',
  'barsy.mobi',
  'barsy.net',
  'barsy.online',
  'barsy.org',
  'barsy.pro',
  'barsy.pub',
  'barsy.ro',
  'barsy.shop',
  'barsy.site',
  'barsy.support',
  'barsy.uk',

  // Magento Commerce
  // Submitted by Damien Tournoud <dtournoud@magento.cloud>
  'magentosite.cloud',

  // May First - People Link : https://mayfirst.org/
  // Submitted by Jamie McClelland <info@mayfirst.org>
  'mayfirst.info',
  'mayfirst.org',

  // Mail.Ru Group : https://hb.cldmail.ru
  // Submitted by Ilya Zaretskiy <zaretskiy@corp.mail.ru>
  'hb.cldmail.ru',

  // Mail Transfer Platform : https://www.neupeer.com
  // Submitted by Li Hui <lihui@neupeer.com>
  'cn.vu',

  // Maze Play: https://www.mazeplay.com
  // Submitted by Adam Humpherys <adam@mws.dev>
  'mazeplay.com',

  // mcpe.me : https://mcpe.me
  // Submitted by Noa Heyl <hi@noa.dev>
  'mcpe.me',

  // McHost : https://mchost.ru
  // Submitted by Evgeniy Subbotin <e.subbotin@mchost.ru>
  'mcdir.me',
  'mcdir.ru',
  'mcpre.ru',
  'vps.mcdir.ru',

  // Mediatech : https://mediatech.by
  // Submitted by Evgeniy Kozhuhovskiy <ugenk@mediatech.by>
  'mediatech.by',
  'mediatech.dev',

  // Medicom Health : https://medicomhealth.com
  // Submitted by Michael Olson <molson@medicomhealth.com>
  'hra.health',

  // Memset hosting : https://www.memset.com
  // Submitted by Tom Whitwell <domains@memset.com>
  'miniserver.com',
  'memset.net',

  // MetaCentrum, CESNET z.s.p.o. : https://www.metacentrum.cz/en/
  // Submitted by Zdeněk Šustr <zdenek.sustr@cesnet.cz>
  'cloud.metacentrum.cz',
  'custom.metacentrum.cz',

  // MetaCentrum, CESNET z.s.p.o. : https://www.metacentrum.cz/en/
  // Submitted by Radim Janča <janca@cesnet.cz>
  'flt.cloud.muni.cz',
  'usr.cloud.muni.cz',

  // Meteor Development Group : https://www.meteor.com/hosting
  // Submitted by Pierre Carrier <pierre@meteor.com>
  'meteorapp.com',
  'eu.meteorapp.com',

  // Michau Enterprises Limited : http://www.co.pl/
  'co.pl',

  // Microsoft Corporation : http://microsoft.com
  // Submitted by Mitch Webster <miwebst@microsoft.com>
  'azurecontainer.io',
  'azurewebsites.net',
  'azure-mobile.net',
  'cloudapp.net',
  'azurestaticapps.net',
  'centralus.azurestaticapps.net',
  'eastasia.azurestaticapps.net',
  'eastus2.azurestaticapps.net',
  'westeurope.azurestaticapps.net',
  'westus2.azurestaticapps.net',

  // minion.systems : http://minion.systems
  // Submitted by Robert Böttinger <r@minion.systems>
  'csx.cc',

  // Mintere : https://mintere.com/
  // Submitted by Ben Aubin <security@mintere.com>
  'mintere.site',

  // MobileEducation, LLC : https://joinforte.com
  // Submitted by Grayson Martin <grayson.martin@mobileeducation.us>
  'forte.id',

  // Mozilla Corporation : https://mozilla.com
  // Submitted by Ben Francis <bfrancis@mozilla.com>
  'mozilla-iot.org',

  // Mozilla Foundation : https://mozilla.org/
  // Submitted by glob <glob@mozilla.com>
  'bmoattachments.org',

  // MSK-IX : https://www.msk-ix.ru/
  // Submitted by Khannanov Roman <r.khannanov@msk-ix.ru>
  'net.ru',
  'org.ru',
  'pp.ru',

  // Mythic Beasts : https://www.mythic-beasts.com
  // Submitted by Paul Cammish <kelduum@mythic-beasts.com>
  'hostedpi.com',
  'customer.mythic-beasts.com',
  'caracal.mythic-beasts.com',
  'fentiger.mythic-beasts.com',
  'lynx.mythic-beasts.com',
  'ocelot.mythic-beasts.com',
  'oncilla.mythic-beasts.com',
  'onza.mythic-beasts.com',
  'sphinx.mythic-beasts.com',
  'vs.mythic-beasts.com',
  'x.mythic-beasts.com',
  'yali.mythic-beasts.com',
  'cust.retrosnub.co.uk',

  // Nabu Casa : https://www.nabucasa.com
  // Submitted by Paulus Schoutsen <infra@nabucasa.com>
  'ui.nabu.casa',

  // Names.of.London : https://names.of.london/
  // Submitted by James Stevens <registry[at]names.of.london> or <publiclist[at]jrcs.net>
  'pony.club',
  'of.fashion',
  'in.london',
  'of.london',
  'from.marketing',
  'with.marketing',
  'for.men',
  'repair.men',
  'and.mom',
  'for.mom',
  'for.one',
  'under.one',
  'for.sale',
  'that.win',
  'from.work',
  'to.work',

  // Net at Work Gmbh : https://www.netatwork.de
  // Submitted by Jan Jaeschke <jan.jaeschke@netatwork.de>
  'cloud.nospamproxy.com',

  // Netlify : https://www.netlify.com
  // Submitted by Jessica Parsons <jessica@netlify.com>
  'netlify.app',

  // Neustar Inc.
  // Submitted by Trung Tran <Trung.Tran@neustar.biz>
  '4u.com',

  // ngrok : https://ngrok.com/
  // Submitted by Alan Shreve <alan@ngrok.com>
  'ngrok.io',

  // Nimbus Hosting Ltd. : https://www.nimbushosting.co.uk/
  // Submitted by Nicholas Ford <nick@nimbushosting.co.uk>
  'nh-serv.co.uk',

  // NFSN, Inc. : https://www.NearlyFreeSpeech.NET/
  // Submitted by Jeff Wheelhouse <support@nearlyfreespeech.net>
  'nfshost.com',

  // Noop : https://noop.app
  // Submitted by Nathaniel Schweinberg <noop@rearc.io>
  'developer.app',
  'noop.app',

  // Northflank Ltd. : https://northflank.com/
  // Submitted by Marco Suter <marco@northflank.com>
  'northflank.app',
  'code.run',

  // Noticeable : https://noticeable.io
  // Submitted by Laurent Pellegrino <security@noticeable.io>
  'noticeable.news',

  // Now-DNS : https://now-dns.com
  // Submitted by Steve Russell <steve@now-dns.com>
  'dnsking.ch',
  'mypi.co',
  'n4t.co',
  '001www.com',
  'ddnslive.com',
  'myiphost.com',
  'forumz.info',
  '16-b.it',
  '32-b.it',
  '64-b.it',
  'soundcast.me',
  'tcp4.me',
  'dnsup.net',
  'hicam.net',
  'now-dns.net',
  'ownip.net',
  'vpndns.net',
  'dynserv.org',
  'now-dns.org',
  'x443.pw',
  'now-dns.top',
  'ntdll.top',
  'freeddns.us',
  'crafting.xyz',
  'zapto.xyz',

  // nsupdate.info : https://www.nsupdate.info/
  // Submitted by Thomas Waldmann <info@nsupdate.info>
  'nsupdate.info',
  'nerdpol.ovh',

  // No-IP.com : https://noip.com/
  // Submitted by Deven Reza <publicsuffixlist@noip.com>
  'blogsyte.com',
  'brasilia.me',
  'cable-modem.org',
  'ciscofreak.com',
  'collegefan.org',
  'couchpotatofries.org',
  'damnserver.com',
  'ddns.me',
  'ditchyourip.com',
  'dnsfor.me',
  'dnsiskinky.com',
  'dvrcam.info',
  'dynns.com',
  'eating-organic.net',
  'fantasyleague.cc',
  'geekgalaxy.com',
  'golffan.us',
  'health-carereform.com',
  'homesecuritymac.com',
  'homesecuritypc.com',
  'hopto.me',
  'ilovecollege.info',
  'loginto.me',
  'mlbfan.org',
  'mmafan.biz',
  'myactivedirectory.com',
  'mydissent.net',
  'myeffect.net',
  'mymediapc.net',
  'mypsx.net',
  'mysecuritycamera.com',
  'mysecuritycamera.net',
  'mysecuritycamera.org',
  'net-freaks.com',
  'nflfan.org',
  'nhlfan.net',
  'no-ip.ca',
  'no-ip.co.uk',
  'no-ip.net',
  'noip.us',
  'onthewifi.com',
  'pgafan.net',
  'point2this.com',
  'pointto.us',
  'privatizehealthinsurance.net',
  'quicksytes.com',
  'read-books.org',
  'securitytactics.com',
  'serveexchange.com',
  'servehumour.com',
  'servep2p.com',
  'servesarcasm.com',
  'stufftoread.com',
  'ufcfan.org',
  'unusualperson.com',
  'workisboring.com',
  '3utilities.com',
  'bounceme.net',
  'ddns.net',
  'ddnsking.com',
  'gotdns.ch',
  'hopto.org',
  'myftp.biz',
  'myftp.org',
  'myvnc.com',
  'no-ip.biz',
  'no-ip.info',
  'no-ip.org',
  'noip.me',
  'redirectme.net',
  'servebeer.com',
  'serveblog.net',
  'servecounterstrike.com',
  'serveftp.com',
  'servegame.com',
  'servehalflife.com',
  'servehttp.com',
  'serveirc.com',
  'serveminecraft.net',
  'servemp3.com',
  'servepics.com',
  'servequake.com',
  'sytes.net',
  'webhop.me',
  'zapto.org',

  // NodeArt : https://nodeart.io
  // Submitted by Konstantin Nosov <Nosov@nodeart.io>
  'stage.nodeart.io',

  // Nucleos Inc. : https://nucleos.com
  // Submitted by Piotr Zduniak <piotr@nucleos.com>
  'pcloud.host',

  // NYC.mn : http://www.information.nyc.mn
  // Submitted by Matthew Brown <mattbrown@nyc.mn>
  'nyc.mn',

  // Observable, Inc. : https://observablehq.com
  // Submitted by Mike Bostock <dns@observablehq.com>
  'static.observableusercontent.com',

  // Octopodal Solutions, LLC. : https://ulterius.io/
  // Submitted by Andrew Sampson <andrew@ulterius.io>
  'cya.gg',

  // OMG.LOL : <https://omg.lol>
  // Submitted by Adam Newbold <adam@omg.lol>
  'omg.lol',

  // Omnibond Systems, LLC. : https://www.omnibond.com
  // Submitted by Cole Estep <cole@omnibond.com>
  'cloudycluster.net',

  // OmniWe Limited: https://omniwe.com
  // Submitted by Vicary Archangel <vicary@omniwe.com>
  'omniwe.site',

  // One.com: https://www.one.com/
  // Submitted by Jacob Bunk Nielsen <jbn@one.com>
  'service.one',

  // One Fold Media : http://www.onefoldmedia.com/
  // Submitted by Eddie Jones <eddie@onefoldmedia.com>
  'nid.io',

  // Open Social : https://www.getopensocial.com/
  // Submitted by Alexander Varwijk <security@getopensocial.com>
  'opensocial.site',

  // OpenCraft GmbH : http://opencraft.com/
  // Submitted by Sven Marnach <sven@opencraft.com>
  'opencraft.hosting',

  // OpenResearch GmbH: https://openresearch.com/
  // Submitted by Philipp Schmid <ops@openresearch.com>
  'orsites.com',

  // Opera Software, A.S.A.
  // Submitted by Yngve Pettersen <yngve@opera.com>
  'operaunite.com',

  // Oursky Limited : https://authgear.com/, https://skygear.io/
  // Submited by Authgear Team <hello@authgear.com>, Skygear Developer <hello@skygear.io>
  'authgear-staging.com',
  'authgearapps.com',
  'skygearapp.com',

  // OutSystems
  // Submitted by Duarte Santos <domain-admin@outsystemscloud.com>
  'outsystemscloud.com',

  // OVHcloud: https://ovhcloud.com
  // Submitted by Vincent Cassé <vincent.casse@ovhcloud.com>
  'webpaas.ovh.net',
  'hosting.ovh.net',

  // OwnProvider GmbH: http://www.ownprovider.com
  // Submitted by Jan Moennich <jan.moennich@ownprovider.com>
  'ownprovider.com',
  'own.pm',

  // OwO : https://whats-th.is/
  // Submitted by Dean Sheather <dean@deansheather.com>
  'owo.codes',

  // OX : http://www.ox.rs
  // Submitted by Adam Grand <webmaster@mail.ox.rs>
  'ox.rs',

  // oy.lc
  // Submitted by Charly Coste <changaco@changaco.oy.lc>
  'oy.lc',

  // Pagefog : https://pagefog.com/
  // Submitted by Derek Myers <derek@pagefog.com>
  'pgfog.com',

  // Pagefront : https://www.pagefronthq.com/
  // Submitted by Jason Kriss <jason@pagefronthq.com>
  'pagefrontapp.com',

  // PageXL : https://pagexl.com
  // Submitted by Yann Guichard <yann@pagexl.com>
  'pagexl.com',

  // Paywhirl, Inc : https://paywhirl.com/
  // Submitted by Daniel Netzer <dan@paywhirl.com>
  'paywhirl.com',

  // pcarrier.ca Software Inc: https://pcarrier.ca/
  // Submitted by Pierre Carrier <pc@rrier.ca>
  'bar0.net',
  'bar1.net',
  'bar2.net',
  'rdv.to',

  // .pl domains (grandfathered)
  'art.pl',
  'gliwice.pl',
  'krakow.pl',
  'poznan.pl',
  'wroc.pl',
  'zakopane.pl',

  // Pantheon Systems, Inc. : https://pantheon.io/
  // Submitted by Gary Dylina <gary@pantheon.io>
  'pantheonsite.io',
  'gotpantheon.com',

  // Peplink | Pepwave : http://peplink.com/
  // Submitted by Steve Leung <steveleung@peplink.com>
  'mypep.link',

  // Perspecta : https://perspecta.com/
  // Submitted by Kenneth Van Alstyne <kvanalstyne@perspecta.com>
  'perspecta.cloud',

  // PE Ulyanov Kirill Sergeevich : https://airy.host
  // Submitted by Kirill Ulyanov <k.ulyanov@airy.host>
  'lk3.ru',

  // Planet-Work : https://www.planet-work.com/
  // Submitted by Frédéric VANNIÈRE <f.vanniere@planet-work.com>
  'on-web.fr',

  // Platform.sh : https://platform.sh
  // Submitted by Nikola Kotur <nikola@platform.sh>
  'bc.platform.sh',
  'ent.platform.sh',
  'eu.platform.sh',
  'us.platform.sh',
  'platformsh.site',
  'tst.site',

  // Platter: https://platter.dev
  // Submitted by Patrick Flor <patrick@platter.dev>
  'platter-app.com',
  'platter-app.dev',
  'platterp.us',

  // Plesk : https://www.plesk.com/
  // Submitted by Anton Akhtyamov <program-managers@plesk.com>
  'pdns.page',
  'plesk.page',
  'pleskns.com',

  // Port53 : https://port53.io/
  // Submitted by Maximilian Schieder <maxi@zeug.co>
  'dyn53.io',

  // Positive Codes Technology Company : http://co.bn/faq.html
  // Submitted by Zulfais <pc@co.bn>
  'co.bn',

  // Postman, Inc : https://postman.com
  // Submitted by Rahul Dhawan <security@postman.com>
  'postman-echo.com',
  'pstmn.io',
  'mock.pstmn.io',
  'httpbin.org',

  //prequalifyme.today : https://prequalifyme.today
  //Submitted by DeepakTiwari deepak@ivylead.io
  'prequalifyme.today',

  // prgmr.com : https://prgmr.com/
  // Submitted by Sarah Newman <owner@prgmr.com>
  'xen.prgmr.com',

  // priv.at : http://www.nic.priv.at/
  // Submitted by registry <lendl@nic.at>
  'priv.at',

  // privacytools.io : https://www.privacytools.io/
  // Submitted by Jonah Aragon <jonah@privacytools.io>
  'prvcy.page',

  // Protocol Labs : https://protocol.ai/
  // Submitted by Michael Burns <noc@protocol.ai>
  'dweb.link',

  // Protonet GmbH : http://protonet.io
  // Submitted by Martin Meier <admin@protonet.io>
  'protonet.io',

  // Publication Presse Communication SARL : https://ppcom.fr
  // Submitted by Yaacov Akiba Slama <admin@chirurgiens-dentistes-en-france.fr>
  'chirurgiens-dentistes-en-france.fr',
  'byen.site',

  // pubtls.org: https://www.pubtls.org
  // Submitted by Kor Nielsen <kor@pubtls.org>
  'pubtls.org',

  // PythonAnywhere LLP: https://www.pythonanywhere.com
  // Submitted by Giles Thomas <giles@pythonanywhere.com>
  'pythonanywhere.com',
  'eu.pythonanywhere.com',

  // QOTO, Org.
  // Submitted by Jeffrey Phillips Freeman <jeffrey.freeman@qoto.org>
  'qoto.io',

  // Qualifio : https://qualifio.com/
  // Submitted by Xavier De Cock <xdecock@gmail.com>
  'qualifioapp.com',

  // QuickBackend: https://www.quickbackend.com
  // Submitted by Dani Biro <dani@pymet.com>
  'qbuser.com',

  // Rad Web Hosting: https://radwebhosting.com
  // Submitted by Scott Claeys <s.claeys@radwebhosting.com>
  'cloudsite.builders',

  // Redgate Software: https://red-gate.com
  // Submitted by Andrew Farries <andrew.farries@red-gate.com>
  'instances.spawn.cc',

  // Redstar Consultants : https://www.redstarconsultants.com/
  // Submitted by Jons Slemmer <jons@redstarconsultants.com>
  'instantcloud.cn',

  // Russian Academy of Sciences
  // Submitted by Tech Support <support@rasnet.ru>
  'ras.ru',

  // QA2
  // Submitted by Daniel Dent (https://www.danieldent.com/)
  'qa2.com',

  // QCX
  // Submitted by Cassandra Beelen <cassandra@beelen.one>
  'qcx.io',
  'sys.qcx.io',

  // QNAP System Inc : https://www.qnap.com
  // Submitted by Nick Chang <nickchang@qnap.com>
  'dev-myqnapcloud.com',
  'alpha-myqnapcloud.com',
  'myqnapcloud.com',

  // Quip : https://quip.com
  // Submitted by Patrick Linehan <plinehan@quip.com>
  'quipelements.com',

  // Qutheory LLC : http://qutheory.io
  // Submitted by Jonas Schwartz <jonas@qutheory.io>
  'vapor.cloud',
  'vaporcloud.io',

  // Rackmaze LLC : https://www.rackmaze.com
  // Submitted by Kirill Pertsev <kika@rackmaze.com>
  'rackmaze.com',
  'rackmaze.net',

  // Rakuten Games, Inc : https://dev.viberplay.io
  // Submitted by Joshua Zhang <public-suffix@rgames.jp>
  'g.vbrplsbx.io',

  // Rancher Labs, Inc : https://rancher.com
  // Submitted by Vincent Fiduccia <domains@rancher.com>
  'on-k3s.io',
  'on-rancher.cloud',
  'on-rio.io',

  // Read The Docs, Inc : https://www.readthedocs.org
  // Submitted by David Fischer <team@readthedocs.org>
  'readthedocs.io',

  // Red Hat, Inc. OpenShift : https://openshift.redhat.com/
  // Submitted by Tim Kramer <tkramer@rhcloud.com>
  'rhcloud.com',

  // Render : https://render.com
  // Submitted by Anurag Goel <dev@render.com>
  'app.render.com',
  'onrender.com',

  // Repl.it : https://repl.it
  // Submitted by Mason Clayton <mason@repl.it>
  'repl.co',
  'id.repl.co',
  'repl.run',

  // Resin.io : https://resin.io
  // Submitted by Tim Perry <tim@resin.io>
  'resindevice.io',
  'devices.resinstaging.io',

  // RethinkDB : https://www.rethinkdb.com/
  // Submitted by Chris Kastorff <info@rethinkdb.com>
  'hzc.io',

  // Revitalised Limited : http://www.revitalised.co.uk
  // Submitted by Jack Price <jack@revitalised.co.uk>
  'wellbeingzone.eu',
  'wellbeingzone.co.uk',

  // Rico Developments Limited : https://adimo.co
  // Submitted by Colin Brown <hello@adimo.co>
  'adimo.co.uk',

  // Riseup Networks : https://riseup.net
  // Submitted by Micah Anderson <micah@riseup.net>
  'itcouldbewor.se',

  // Rochester Institute of Technology : http://www.rit.edu/
  // Submitted by Jennifer Herting <jchits@rit.edu>
  'git-pages.rit.edu',

  // Rusnames Limited: http://rusnames.ru/
  // Submitted by Sergey Zotov <admin@rusnames.ru>
  'биз.рус',
  'ком.рус',
  'крым.рус',
  'мир.рус',
  'мск.рус',
  'орг.рус',
  'самара.рус',
  'сочи.рус',
  'спб.рус',
  'я.рус',

  // Sandstorm Development Group, Inc. : https://sandcats.io/
  // Submitted by Asheesh Laroia <asheesh@sandstorm.io>
  'sandcats.io',

  // SBE network solutions GmbH : https://www.sbe.de/
  // Submitted by Norman Meilick <nm@sbe.de>
  'logoip.de',
  'logoip.com',

  // schokokeks.org GbR : https://schokokeks.org/
  // Submitted by Hanno Böck <hanno@schokokeks.org>
  'schokokeks.net',

  // Scottish Government: https://www.gov.scot
  // Submitted by Martin Ellis <martin.ellis@gov.scot>
  'gov.scot',
  'service.gov.scot',

  // Scry Security : http://www.scrysec.com
  // Submitted by Shante Adam <shante@skyhat.io>
  'scrysec.com',

  // Securepoint GmbH : https://www.securepoint.de
  // Submitted by Erik Anders <erik.anders@securepoint.de>
  'firewall-gateway.com',
  'firewall-gateway.de',
  'my-gateway.de',
  'my-router.de',
  'spdns.de',
  'spdns.eu',
  'firewall-gateway.net',
  'my-firewall.org',
  'myfirewall.org',
  'spdns.org',

  // Seidat : https://www.seidat.com
  // Submitted by Artem Kondratev <accounts@seidat.com>
  'seidat.net',

  // Sellfy : https://sellfy.com
  // Submitted by Yuriy Romadin <contact@sellfy.com>
  'sellfy.store',

  // Senseering GmbH : https://www.senseering.de
  // Submitted by Felix Mönckemeyer <f.moenckemeyer@senseering.de>
  'senseering.net',

  // Sendmsg: https://www.sendmsg.co.il
  // Submitted by Assaf Stern <domains@comstar.co.il>
  'minisite.ms',

  // Service Magnet : https://myservicemagnet.com
  // Submitted by Dave Sanders <dave@myservicemagnet.com>
  'magnet.page',

  // Service Online LLC : http://drs.ua/
  // Submitted by Serhii Bulakh <support@drs.ua>
  'biz.ua',
  'co.ua',
  'pp.ua',

  // Shift Crypto AG : https://shiftcrypto.ch
  // Submitted by alex <alex@shiftcrypto.ch>
  'shiftcrypto.dev',
  'shiftcrypto.io',

  // ShiftEdit : https://shiftedit.net/
  // Submitted by Adam Jimenez <adam@shiftcreate.com>
  'shiftedit.io',

  // Shopblocks : http://www.shopblocks.com/
  // Submitted by Alex Bowers <alex@shopblocks.com>
  'myshopblocks.com',

  // Shopify : https://www.shopify.com
  // Submitted by Alex Richter <alex.richter@shopify.com>
  'myshopify.com',

  // Shopit : https://www.shopitcommerce.com/
  // Submitted by Craig McMahon <craig@shopitcommerce.com>
  'shopitsite.com',

  // shopware AG : https://shopware.com
  // Submitted by Jens Küper <cloud@shopware.com>
  'shopware.store',

  // Siemens Mobility GmbH
  // Submitted by Oliver Graebner <security@mo-siemens.io>
  'mo-siemens.io',

  // SinaAppEngine : http://sae.sina.com.cn/
  // Submitted by SinaAppEngine <saesupport@sinacloud.com>
  '1kapp.com',
  'appchizi.com',
  'applinzi.com',
  'sinaapp.com',
  'vipsinaapp.com',

  // Siteleaf : https://www.siteleaf.com/
  // Submitted by Skylar Challand <support@siteleaf.com>
  'siteleaf.net',

  // Skyhat : http://www.skyhat.io
  // Submitted by Shante Adam <shante@skyhat.io>
  'bounty-full.com',
  'alpha.bounty-full.com',
  'beta.bounty-full.com',

  // Small Technology Foundation : https://small-tech.org
  // Submitted by Aral Balkan <aral@small-tech.org>
  'small-web.org',

  // Smoove.io : https://www.smoove.io/
  // Submitted by Dan Kozak <dan@smoove.io>
  'vp4.me',

  // Snowplow Analytics : https://snowplowanalytics.com/
  // Submitted by Ian Streeter <ian@snowplowanalytics.com>
  'try-snowplow.com',

  // SourceHut : https://sourcehut.org
  // Submitted by Drew DeVault <sir@cmpwn.com>
  'srht.site',

  // Stackhero : https://www.stackhero.io
  // Submitted by Adrien Gillon <adrien+public-suffix-list@stackhero.io>
  'stackhero-network.com',

  // Staclar : https://staclar.com
  // Submitted by Matthias Merkel <matthias.merkel@staclar.com>
  'novecore.site',

  // staticland : https://static.land
  // Submitted by Seth Vincent <sethvincent@gmail.com>
  'static.land',
  'dev.static.land',
  'sites.static.land',

  // Storebase : https://www.storebase.io
  // Submitted by Tony Schirmer <tony@storebase.io>
  'storebase.store',

  // Strategic System Consulting (eApps Hosting): https://www.eapps.com/
  // Submitted by Alex Oancea <aoancea@cloudscale365.com>
  'vps-host.net',
  'atl.jelastic.vps-host.net',
  'njs.jelastic.vps-host.net',
  'ric.jelastic.vps-host.net',

  // Sony Interactive Entertainment LLC : https://sie.com/
  // Submitted by David Coles <david.coles@sony.com>
  'playstation-cloud.com',

  // SourceLair PC : https://www.sourcelair.com
  // Submitted by Antonis Kalipetis <akalipetis@sourcelair.com>
  'apps.lair.io',
  'stolos.io',

  // SpaceKit : https://www.spacekit.io/
  // Submitted by Reza Akhavan <spacekit.io@gmail.com>
  'spacekit.io',

  // SpeedPartner GmbH: https://www.speedpartner.de/
  // Submitted by Stefan Neufeind <info@speedpartner.de>
  'customer.speedpartner.de',

  // Spreadshop (sprd.net AG) : https://www.spreadshop.com/
  // Submitted by Martin Breest <security@spreadshop.com>
  'myspreadshop.at',
  'myspreadshop.com.au',
  'myspreadshop.be',
  'myspreadshop.ca',
  'myspreadshop.ch',
  'myspreadshop.com',
  'myspreadshop.de',
  'myspreadshop.dk',
  'myspreadshop.es',
  'myspreadshop.fi',
  'myspreadshop.fr',
  'myspreadshop.ie',
  'myspreadshop.it',
  'myspreadshop.net',
  'myspreadshop.nl',
  'myspreadshop.no',
  'myspreadshop.pl',
  'myspreadshop.se',
  'myspreadshop.co.uk',

  // Standard Library : https://stdlib.com
  // Submitted by Jacob Lee <jacob@stdlib.com>
  'api.stdlib.com',

  // Storj Labs Inc. : https://storj.io/
  // Submitted by Philip Hutchins <hostmaster@storj.io>
  'storj.farm',

  // Studenten Net Twente : http://www.snt.utwente.nl/
  // Submitted by Silke Hofstra <syscom@snt.utwente.nl>
  'utwente.io',

  // Student-Run Computing Facility : https://www.srcf.net/
  // Submitted by Edwin Balani <sysadmins@srcf.net>
  'soc.srcf.net',
  'user.srcf.net',

  // Sub 6 Limited: http://www.sub6.com
  // Submitted by Dan Miller <dm@sub6.com>
  'temp-dns.com',

  // Supabase : https://supabase.io
  // Submitted by Inian Parameshwaran <security@supabase.io>
  'supabase.co',
  'supabase.in',
  'supabase.net',
  'su.paba.se',

  // Symfony, SAS : https://symfony.com/
  // Submitted by Fabien Potencier <fabien@symfony.com>
  's5y.io',
  'sensiosite.cloud',

  // Syncloud : https://syncloud.org
  // Submitted by Boris Rybalkin <syncloud@syncloud.it>
  'syncloud.it',

  // Synology, Inc. : https://www.synology.com/
  // Submitted by Rony Weng <ronyweng@synology.com>
  'diskstation.me',
  'dscloud.biz',
  'dscloud.me',
  'dscloud.mobi',
  'dsmynas.com',
  'dsmynas.net',
  'dsmynas.org',
  'familyds.com',
  'familyds.net',
  'familyds.org',
  'i234.me',
  'myds.me',
  'synology.me',
  'vpnplus.to',
  'direct.quickconnect.to',

  // Tabit Technologies Ltd. : https://tabit.cloud/
  // Submitted by Oren Agiv <oren@tabit.cloud>
  'tabitorder.co.il',

  // TAIFUN Software AG : http://taifun-software.de
  // Submitted by Bjoern Henke <dev-server@taifun-software.de>
  'taifun-dns.de',

  // Tailscale Inc. : https://www.tailscale.com
  // Submitted by David Anderson <danderson@tailscale.com>
  'beta.tailscale.net',
  'ts.net',

  // TASK geographical domains (www.task.gda.pl/uslugi/dns)
  'gda.pl',
  'gdansk.pl',
  'gdynia.pl',
  'med.pl',
  'sopot.pl',

  // Teckids e.V. : https://www.teckids.org
  // Submitted by Dominik George <dominik.george@teckids.org>
  'edugit.io',
  's3.teckids.org',

  // Telebit : https://telebit.cloud
  // Submitted by AJ ONeal <aj@telebit.cloud>
  'telebit.app',
  'telebit.io',
  'telebit.xyz',

  // The Gwiddle Foundation : https://gwiddlefoundation.org.uk
  // Submitted by Joshua Bayfield <joshua.bayfield@gwiddlefoundation.org.uk>
  'gwiddle.co.uk',

  // Thingdust AG : https://thingdust.com/
  // Submitted by Adrian Imboden <adi@thingdust.com>
  'firenet.ch',
  'svc.firenet.ch',
  'reservd.com',
  'thingdustdata.com',
  'cust.dev.thingdust.io',
  'cust.disrec.thingdust.io',
  'cust.prod.thingdust.io',
  'cust.testing.thingdust.io',
  'reservd.dev.thingdust.io',
  'reservd.disrec.thingdust.io',
  'reservd.testing.thingdust.io',

  // ticket i/O GmbH : https://ticket.io
  // Submitted by Christian Franke <it@ticket.io>
  'tickets.io',

  // Tlon.io : https://tlon.io
  // Submitted by Mark Staarink <mark@tlon.io>
  'arvo.network',
  'azimuth.network',
  'tlon.network',

  // Tor Project, Inc. : https://torproject.org
  // Submitted by Antoine Beaupré <anarcat@torproject.org
  'torproject.net',
  'pages.torproject.net',

  // TownNews.com : http://www.townnews.com
  // Submitted by Dustin Ward <dward@townnews.com>
  'bloxcms.com',
  'townnews-staging.com',

  // TradableBits: https://tradablebits.com
  // Submitted by Dmitry Khrisanov dmitry@tradablebits.com
  'tbits.me',

  // TrafficPlex GmbH : https://www.trafficplex.de/
  // Submitted by Phillipp Röll <phillipp.roell@trafficplex.de>
  '12hp.at',
  '2ix.at',
  '4lima.at',
  'lima-city.at',
  '12hp.ch',
  '2ix.ch',
  '4lima.ch',
  'lima-city.ch',
  'trafficplex.cloud',
  'de.cool',
  '12hp.de',
  '2ix.de',
  '4lima.de',
  'lima-city.de',
  '1337.pictures',
  'clan.rip',
  'lima-city.rocks',
  'webspace.rocks',
  'lima.zone',

  // TransIP : https://www.transip.nl
  // Submitted by Rory Breuk <rbreuk@transip.nl>
  'transurl.be',
  'transurl.eu',
  'transurl.nl',

  // TuxFamily : http://tuxfamily.org
  // Submitted by TuxFamily administrators <adm@staff.tuxfamily.org>
  'tuxfamily.org',

  // TwoDNS : https://www.twodns.de/
  // Submitted by TwoDNS-Support <support@two-dns.de>
  'dd-dns.de',
  'diskstation.eu',
  'diskstation.org',
  'dray-dns.de',
  'draydns.de',
  'dyn-vpn.de',
  'dynvpn.de',
  'mein-vigor.de',
  'my-vigor.de',
  'my-wan.de',
  'syno-ds.de',
  'synology-diskstation.de',
  'synology-ds.de',

  // Typeform : https://www.typeform.com
  // Submitted by Sergi Ferriz <sergi.ferriz@typeform.com>
  'pro.typeform.com',

  // Uberspace : https://uberspace.de
  // Submitted by Moritz Werner <mwerner@jonaspasche.com>
  'uber.space',
  'uberspace.de',

  // UDR Limited : http://www.udr.hk.com
  // Submitted by registry <hostmaster@udr.hk.com>
  'hk.com',
  'hk.org',
  'ltd.hk',
  'inc.hk',

  // United Gameserver GmbH : https://united-gameserver.de
  // Submitted by Stefan Schwarz <sysadm@united-gameserver.de>
  'virtualuser.de',
  'virtual-user.de',

  // Upli : https://upli.io
  // Submitted by Lenny Bakkalian <lenny.bakkalian@gmail.com>
  'upli.io',

  // urown.net : https://urown.net
  // Submitted by Hostmaster <hostmaster@urown.net>
  'urown.cloud',
  'dnsupdate.info',

  // .US
  // Submitted by Ed Moore <Ed.Moore@lib.de.us>
  'lib.de.us',

  // VeryPositive SIA : http://very.lv
  // Submitted by Danko Aleksejevs <danko@very.lv>
  '2038.io',

  // Vercel, Inc : https://vercel.com/
  // Submitted by Connor Davis <security@vercel.com>
  'vercel.app',
  'vercel.dev',
  'now.sh',

  // Viprinet Europe GmbH : http://www.viprinet.com
  // Submitted by Simon Kissel <hostmaster@viprinet.com>
  'router.management',

  // Virtual-Info : https://www.virtual-info.info/
  // Submitted by Adnan RIHAN <hostmaster@v-info.info>
  'v-info.info',

  // Voorloper.com: https://voorloper.com
  // Submitted by Nathan van Bakel <info@voorloper.com>
  'voorloper.cloud',

  // Voxel.sh DNS : https://voxel.sh/dns/
  // Submitted by Mia Rehlinger <dns@voxel.sh>
  'neko.am',
  'nyaa.am',
  'be.ax',
  'cat.ax',
  'es.ax',
  'eu.ax',
  'gg.ax',
  'mc.ax',
  'us.ax',
  'xy.ax',
  'nl.ci',
  'xx.gl',
  'app.gp',
  'blog.gt',
  'de.gt',
  'to.gt',
  'be.gy',
  'cc.hn',
  'blog.kg',
  'io.kg',
  'jp.kg',
  'tv.kg',
  'uk.kg',
  'us.kg',
  'de.ls',
  'at.md',
  'de.md',
  'jp.md',
  'to.md',
  'indie.porn',
  'vxl.sh',
  'ch.tc',
  'me.tc',
  'we.tc',
  'nyan.to',
  'at.vg',
  'blog.vu',
  'dev.vu',
  'me.vu',

  // V.UA Domain Administrator : https://domain.v.ua/
  // Submitted by Serhii Rostilo <sergey@rostilo.kiev.ua>
  'v.ua',

  // Waffle Computer Inc., Ltd. : https://docs.waffleinfo.com
  // Submitted by Masayuki Note <masa@blade.wafflecell.com>
  'wafflecell.com',

  // WapBlog.ID : https://www.wapblog.id
  // Submitted by Fajar Sodik <official@wapblog.id>
  'idnblogger.com',
  'indowapblog.com',
  'bloger.id',
  'wblog.id',
  'wbq.me',
  'fastblog.net',

  // WebHare bv: https://www.webhare.com/
  // Submitted by Arnold Hendriks <info@webhare.com>
  'webhare.dev',

  // WebHotelier Technologies Ltd: https://www.webhotelier.net/
  // Submitted by Apostolos Tsakpinis <apostolos.tsakpinis@gmail.com>
  'reserve-online.net',
  'reserve-online.com',
  'bookonline.app',
  'hotelwithflight.com',

  // WeDeploy by Liferay, Inc. : https://www.wedeploy.com
  // Submitted by Henrique Vicente <security@wedeploy.com>
  'wedeploy.io',
  'wedeploy.me',
  'wedeploy.sh',

  // Western Digital Technologies, Inc : https://www.wdc.com
  // Submitted by Jung Jin <jungseok.jin@wdc.com>
  'remotewd.com',

  // WIARD Enterprises : https://wiardweb.com
  // Submitted by Kidd Hustle <kiddhustle@wiardweb.com>
  'pages.wiardweb.com',

  // Wikimedia Labs : https://wikitech.wikimedia.org
  // Submitted by Arturo Borrero Gonzalez <aborrero@wikimedia.org>
  'wmflabs.org',
  'toolforge.org',
  'wmcloud.org',

  // WISP : https://wisp.gg
  // Submitted by Stepan Fedotov <stepan@wisp.gg>
  'panel.gg',
  'daemon.panel.gg',

  // WoltLab GmbH : https://www.woltlab.com
  // Submitted by Tim Düsterhus <security@woltlab.cloud>
  'woltlab-demo.com',
  'myforum.community',
  'community-pro.de',
  'diskussionsbereich.de',
  'community-pro.net',
  'meinforum.net',

  // Woods Valldata : https://www.woodsvalldata.co.uk/
  // Submitted by Chris Whittle <chris.whittle@woodsvalldata.co.uk>
  'affinitylottery.org.uk',
  'raffleentry.org.uk',
  'weeklylottery.org.uk',

  // WP Engine : https://wpengine.com/
  // Submitted by Michael Smith <michael.smith@wpengine.com>
  // Submitted by Brandon DuRette <brandon.durette@wpengine.com>
  'wpenginepowered.com',
  'js.wpenginepowered.com',

  // Wix.com, Inc. : https://www.wix.com
  // Submitted by Shahar Talmi <shahar@wix.com>
  'wixsite.com',
  'editorx.io',

  // XenonCloud GbR: https://xenoncloud.net
  // Submitted by Julian Uphoff <publicsuffixlist@xenoncloud.net>
  'half.host',

  // XnBay Technology : http://www.xnbay.com/
  // Submitted by XnBay Developer <developer.xncloud@gmail.com>
  'xnbay.com',
  'u2.xnbay.com',
  'u2-local.xnbay.com',

  // XS4ALL Internet bv : https://www.xs4all.nl/
  // Submitted by Daniel Mostertman <unixbeheer+publicsuffix@xs4all.net>
  'cistron.nl',
  'demon.nl',
  'xs4all.space',

  // Yandex.Cloud LLC: https://cloud.yandex.com
  // Submitted by Alexander Lodin <security+psl@yandex-team.ru>
  'yandexcloud.net',
  'storage.yandexcloud.net',
  'website.yandexcloud.net',

  // YesCourse Pty Ltd : https://yescourse.com
  // Submitted by Atul Bhouraskar <atul@yescourse.com>
  'official.academy',

  // Yola : https://www.yola.com/
  // Submitted by Stefano Rivera <stefano@yola.com>
  'yolasite.com',

  // Yombo : https://yombo.net
  // Submitted by Mitch Schwenk <mitch@yombo.net>
  'ybo.faith',
  'yombo.me',
  'homelink.one',
  'ybo.party',
  'ybo.review',
  'ybo.science',
  'ybo.trade',

  // Yunohost : https://yunohost.org
  // Submitted by Valentin Grimaud <security@yunohost.org>
  'ynh.fr',
  'nohost.me',
  'noho.st',

  // ZaNiC : http://www.za.net/
  // Submitted by registry <hostmaster@nic.za.net>
  'za.net',
  'za.org',

  // Zine EOOD : https://zine.bg/
  // Submitted by Martin Angelov <martin@zine.bg>
  'bss.design',

  // Zitcom A/S : https://www.zitcom.dk
  // Submitted by Emil Stahl <esp@zitcom.dk>
  'basicserver.io',
  'virtualserver.io',
  'enterprisecloud.nu',

  // ===END PRIVATE DOMAINS===
];
